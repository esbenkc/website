"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const obsidian_1 = require("obsidian");
const view_1 = require("@codemirror/view");
class KeystrokeTrackerPlugin extends obsidian_1.Plugin {
    constructor() {
        super(...arguments);
        this.fileKeystrokeData = new Map();
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Loading Keystroke Tracker Plugin");
            // Load stored keystroke data
            const data = yield this.loadData();
            if (data && data.fileKeystrokeData) {
                this.fileKeystrokeData = new Map(Object.entries(data.fileKeystrokeData));
            }
            else {
                this.fileKeystrokeData = new Map();
            }
            // Register CodeMirror 6 extension
            this.registerEditorExtension(this.keystrokeTrackerExtension());
            // Update frontmatter on file save
            this.registerEvent(this.app.vault.on("modify", (file) => __awaiter(this, void 0, void 0, function* () {
                if (file.extension === "md") {
                    yield this.updateFrontmatter(file);
                    yield this.saveKeystrokeData();
                }
            })));
            // Add command to show keystroke data
            this.addCommand({
                id: "show-keystroke-data",
                name: "Show Keystroke Data",
                checkCallback: (checking) => {
                    const markdownView = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
                    if (markdownView) {
                        if (!checking) {
                            const file = markdownView.file;
                            if (file) {
                                const path = file.path;
                                const data = this.fileKeystrokeData.get(path);
                                if (data) {
                                    new obsidian_1.Notice(`Total Keystrokes: ${data.totalKeystrokes}`);
                                    new KeystrokeDataModal(this.app, data.keystrokes).open();
                                }
                                else {
                                    new obsidian_1.Notice("No keystroke data for this document.");
                                }
                            }
                            else {
                                new obsidian_1.Notice("No file is open.");
                            }
                        }
                        return true;
                    }
                    return false;
                },
            });
        });
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Unloading Keystroke Tracker Plugin");
            yield this.saveKeystrokeData();
        });
    }
    keystrokeTrackerExtension() {
        return view_1.EditorView.updateListener.of((update) => {
            if (update.docChanged) {
                const editor = update.view;
                const file = this.getCurrentFile();
                if (file) {
                    const path = file.path;
                    let data = this.fileKeystrokeData.get(path);
                    if (!data) {
                        data = { totalKeystrokes: 0, keystrokes: [] };
                        this.fileKeystrokeData.set(path, data);
                    }
                    const changes = update.changes;
                    let insertedText = "";
                    changes.iterChanges((fromA, toA, fromB, toB, inserted) => {
                        insertedText += inserted.sliceString(0);
                    });
                    data.totalKeystrokes += insertedText.length;
                    const timestamp = Date.now();
                    data.keystrokes.push({ key: insertedText, timestamp });
                }
            }
        });
    }
    getCurrentFile() {
        const leaf = this.app.workspace.getMostRecentLeaf();
        if (leaf) {
            const view = leaf.view;
            if (view instanceof obsidian_1.MarkdownView) {
                return view.file;
            }
        }
        return null;
    }
    updateFrontmatter(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = file.path;
            const data = this.fileKeystrokeData.get(path);
            if (data) {
                let content = yield this.app.vault.read(file);
                let newContent = content;
                let frontmatter = {};
                if (content.startsWith("---\n")) {
                    const endIndex = content.indexOf("\n---", 4);
                    if (endIndex !== -1) {
                        const fmString = content.substring(4, endIndex);
                        frontmatter = this.parseFrontmatter(fmString);
                        // Update totalKeystrokes
                        frontmatter["totalKeystrokes"] = data.totalKeystrokes;
                        const newFmString = this.buildFrontmatterString(frontmatter);
                        newContent =
                            "---\n" + newFmString + "\n---" + content.substring(endIndex + 4);
                    }
                }
                else {
                    // No frontmatter, add it
                    frontmatter["totalKeystrokes"] = data.totalKeystrokes;
                    const newFmString = this.buildFrontmatterString(frontmatter);
                    newContent = "---\n" + newFmString + "\n---\n" + content;
                }
                // Write back to the file
                yield this.app.vault.modify(file, newContent);
            }
        });
    }
    parseFrontmatter(fmString) {
        const lines = fmString.split("\n");
        const frontmatter = {};
        for (const line of lines) {
            const index = line.indexOf(":");
            if (index !== -1) {
                const key = line.substring(0, index).trim();
                const value = line.substring(index + 1).trim();
                frontmatter[key] = value;
            }
        }
        return frontmatter;
    }
    buildFrontmatterString(frontmatter) {
        let fmString = "";
        for (const key in frontmatter) {
            fmString += `${key}: ${frontmatter[key]}\n`;
        }
        return fmString.trim();
    }
    saveKeystrokeData() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataObj = {};
            for (const [key, value] of this.fileKeystrokeData.entries()) {
                dataObj[key] = value;
            }
            yield this.saveData({ fileKeystrokeData: dataObj });
        });
    }
}
exports.default = KeystrokeTrackerPlugin;
class KeystrokeDataModal extends obsidian_1.Modal {
    constructor(app, keystrokes) {
        super(app);
        this.keystrokes = keystrokes;
    }
    onOpen() {
        const { contentEl } = this;
        contentEl.setText("Keystroke Data:");
        const listEl = contentEl.createEl("ul");
        this.keystrokes.forEach((keystroke) => {
            const itemEl = listEl.createEl("li");
            itemEl.setText(`Key: "${keystroke.key}", Time: ${new Date(keystroke.timestamp).toLocaleString()}`);
        });
    }
    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
