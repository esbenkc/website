---
created: 2024-10-11T03:32:11.793Z
title: My Tools
slug: tools
date: 2024-10-11T03:32:11.793Z
categories:
  - tools
---
## Tools of the trade
For any 21st century cyborg, the tools we use will be the practical, productive, and externalized, until neural implants actually outperform voice and text interaction. In this post, I will take the cyborg schism of the productive cyborg over the idealist cyborg. This just means that the list is less for the emacs magicians and more for the cyborg-aligned internet natives.

*I won't walk through my custom software (such as AI agents, trackers, network monitors, etc.), specific websites, information stream filtering strategies, developer frameworks, brain optimization techniques, or programming languages. Those might be for another post and another day.*
### Hardware
Any good cyborg needs good hardware. Let's go through a few important accessories.
#### Visual Displays

- **XREAL Air 2 Pro:** These AR glasses give you three virtual monitors with the Nebula MacOS software and connects with USB-C like any other monitor. Eye strain is a slight issue but you can largely get used to this.
- **Portable monitors:** These are 15.6 inch lightweight screens, often less than 500g. I hear the [ZenScreens](https://www.asus.com/my/displays-desktops/monitors/zenscreen/) are generally good.
- **FLEXSTA portable monitor stand:** Completely invaluable for vertical screen real estate. My setup uses this with the 16" Macbook to give me a 32.6 inch vertical monitor anywhere I go. Horizontal monitor setups always fail on the go and I notice I will never use the second monitor if that's the setup.
- **Paper displays:** With all this cybering around, your eyes sometimes need a break from the blue light. I own the Remarkable 2 E-ink tablet but that company has been hampered down by the IP owners of E-ink, leaving room for new players: [Daylight](https://daylightcomputer.com/product) is my best bet for your money's worth. Definitely looking at that one myself.

#### Computing Devices

- **Laptop:** I changed from Lenovo to the Macbook M1 Pro when the new lines came out and I haven't looked back since. Apple innovating with their new high quality integrated chip designs was a looker for me and the deal closer was the re-integration of HDMI and SD card slot. To emulate Windows, just use the absolutely amazing [Parallels](https://www.parallels.com/products/desktop) software. Slightly pricey but if you value your hourly time at more than $2, just go ahead and buy it.
- **Raspberry Pi:** These micro computers are some of the best FLOP/S per buck on the market and you can make them do anything. The EnigmA machine from my previous home of course has a RP running the wireless speaker system, IR sensors for entries and exits, and full control of a monitor to display the most important information (such as D20 rolls initialized based on today's date).
- **Tinybox:** If you have the money, go for a Tinybox. We don't want our AGI API requests to go through Big Stats and having your own supercomputer ready to deploy 1T parameter or larger open weights models means that your future will not be infringed upon.

#### Input Devices

- **Keyboards:** My first recommendation is not to get too into keyboards since it's a money hole. Go to Keychron's website and pick out the one that seems the best. I personally have the [K11 Alice 65 layout](https://www.keychron.com/collections/alice-layout-keyboards/products/keychron-k11-pro-alice-layout-qmk-via-wireless-custom-mechanical-keyboard) with MX Brown keys which I enjoy a lot.
- **OP-1 synthesizer:** If your cyborg experiments extend into the realm of digital synthesizers, another warning is in place. This also gets expensive and the OP-1 is my main tool of choice at the moment.

#### Audio Equipment

- **HiFi:** Audio is extremely important. I've had the Bowers & Wilkins PX7 and recently bought the PX8 but I would only recommend them in absence of better. If you get to that price range, you might consider the Airpods Pro Max which I think seem fine. I've never been able to find better earphones than the Airpods Pro 2.
- With that said, **wireless speakers that coordinate** and **LED lights** are key to making your home truly cyborg. The only thing I can say with certainty is _don't go for Sonos_. The speaker connectivity is horribly buggy and works even worse than AirPlay. RGB LED lights are definitely the most taste-dependent but go for ones that have a diffuse cover, WiFi connectivity, and IR / bluetooth.

#### Mobile Devices

- **[Jelly Star](https://kran.ai/jelly):** Last, but _absolutely_ not least, is my favorite phone in the whole world, the Jelly series. These are <5" phones from UniHertz and my main smartphone. I've always sought out the smallest form factor smartphones and as they all got bigger, I finally found the True small form factor phone in Jelly 2. I'm currently on my third Jelly phone (with a backup iPhone 12 Mini).

#### Virtual Reality

- **Oculus Quest:** If you want to work in VR among the dustridden plains of Mars, the Quest line is definitely the cheapest and most capable option among contenders like HoloLens and Apple Vision Pro. Hook it up with a wire and you should be good to work in cyberspace.

#### Networking and Security

- **Hardware network boxing:** Given that you'll have to purchase quite a few West Taiwanese WiFi spybots for your cyborg existence (and even if not), it's a great idea to box off your network and use hardware monitoring and filtering of network traffic. This should let you block outgoing traffic from WiFi-connected devices and for that matter, install hardware ad blockers. Check out the [ASUS emulator](https://demoui.asus.com/TrafficAnalyzer_Statistic.asp) and the open source [pfSense](https://www.pfsense.org/).

### Software
The software you use is crucial in enhancing productivity and integrating technology into daily life. Below is a curated list organized by category. Icons indicate whether it's an app (✱) or a Chromium plugin (🌎).
#### Productivity and workflow

- ✱ **Alfred:** Alfred is an open Spotlight replacement that gives you some extreme access to complex tooling through the simple cmd + space interaction format that is a magician's wand in the right hands. I have many custom workflows installed (e.g. one that runs a custom chatbot when I write `ch`) along with writing replacements (e.g. `::apart` getting replaced by `https://apartresearch.com`) and an overall much better file navigation experience than the absolute crime of a default file system, Finder.
- ✱ **RescueTime:** This is both a cross-platform app (mobile, desktop, you name it) and a Chromium plugin. It logs all your activity and gives you easy statistics of your productive and unproductive time on your devices. Others like it exist but RescueTime seems like the best from my experimentation.
- ✱ **Obsidian:** Obsidian is my note-taking tool of choice. It outranks every other type of personal note-taking app due to being open source, centrally staffed, and designed according to human cognition. It is about connecting concepts across wide-ranging topics much more than it is about putting a note in a concept hierarchy and forever forgetting about it. It also runs this website!
- ✱ **Notion:** In my experience, Notion is the most versatile tool for structured documentation and operational work. It has advanced database management, strong automation by itself or with Zapier, and great user management.
- **✱ Google Drive:** The only lack of Notion is its collaborative editing and document preparation. For this, use Google Docs. It's just so good. I hear from the financial experts that you need Excel for those 25% of features that are lacking in Sheets. Maybe one day I'll feel that lack, but not yet. By using function calls in Sheets, you can already achieve a lot.
- ✱ **Discord:** Discord is a nearly free Slack alternative with more features, better user management, and without Slackbot spamming you all the time. What more can you ask for? The only feature differential is the Connections feature but it's not enough to switch over. Due to my work, I of course still have a few Slacks lying around.

#### System enhancements

- **MacOS:** A very lackluster operating system due to weird design choices and lack of control. This might also be a gift, as I cannot spend endless hours customizing it. And it's UNIX.
- **Fixing MacOS:**
    - ✱ **Magnet:** Magnet makes window management at least bearable.
    - ✱ **Middle:** Middle enables middle mouse clicks on the touchpad.
    - ✱ **Lightshot:** Another good one is Lightshot which fixes parts of the MacOS screen capture tool.
- ✱ **Rewind:** Rewind records and compresses everything on-screen on-device so you can search through the resulting database to find out what the heck you were working on last night when you didn't get any sleep and you don't understand where those hours went. It also does meeting notes and so on but I find those less useful.
- ✱ **Parallels:** This is a MacOS Windows emulator and _damn_, is it good. This feels like one of those software scenarios where someone becomes an incumbent but uses that situation to actually deliver a much better solution year by year. Highly recommended if you need it.
- ✱ **Nordpass:** You need some kind of password manager and at Apart, we use Nordpass. It works quite well, though I would expect most others to work equally as well.
- ✱ **Cloud Backup:** It's definitely important to use a proper cloud backup provider. I always have all my devices completely backed up using a relatively custom solution from a Danish provider.
- ✱ **Mailing apps:** Interestingly, I've used the default Mac Mail app for a long while but I'm looking at newer solutions such as Superhuman or HEY. Of course, I host my own email server though most business-related activity goes through Google Workspace.
- ✱ **Google Photos:** Backing up my photos with Google Photos has been a superb experience and relatively cheap.

#### Browsers and extensions

- ✱ **Edge:** I transitioned to Edge when Sydney came out and the result is that I still use it and enjoy it. Being a Chromium-based browser, it's compatible with all Chrome plugins, has a free AGI at your hand, and neat side-browsing features.
- 🌎 **Vimium:** I once learned vim like a true software aficionado and found it horribly inefficient due to my use of more than 15 different programs in a day. Vimium is a Chromium plugin that allows you to click all links, bookmark page locations, and much more. Very enjoyable if you want to go keyboard-native.
- 🌎 **Leechblock:** Leechblock seems to be the best social media blocking Chromium plugin available and allows you a lot of interesting features. I personally use the feature that allows you to unblock sites if you write a paragraph first and quite enjoy it.
- 🌎 **Video Speed Controller:** Another Chromium plugin. This one allows you to control the speed of videos you watch beyond the limits of your player. I mostly use it to quickly get all YouTube videos to 2x or even 3.5x.
- 🌎 **Privacy Badger:** Chromium plugin that helps you block known trackers.
- 🌎 **Thumbnail Rating Bar:** Chromium plugin specifically for YouTube that shows the log likes/dislike ratio on thumbnails. Allows you to quickly skip hundreds of useless videos.
- ✱ **LokiNet:** This helps you connect to the onion network. 'nough said.

#### Development tools

- ✱ **VSCode:** VSCode is my tool of choice for programming along with the **zsh command line**. I use both in conjunction with each other and do most of my git interaction in CLI. For VSCode, I use the high contract black theme.
- ✱ **Docker:** This is a devops tool to build standardized virtual servers, meaning that you make a pretend-computer on your computer with specific hardware specifications. Was used to build cyber challenges for [Abydos](https://cybercapabilities.org/).
- ✱ **Filezilla:** I mostly use this for easy sFTP access but you can use it for general file system synchronization across servers to a pretty high degree.
- ✱ **VNC Viewer:** I use VNC to connect to our Raspberry Pi as you would with Teamviewer on another device. This is very useful for a standard Debian RP and saves a lot of hassle.
- **✱ RStudio:** RStudio keeps being the best R IDE and since I love tidyverse and ggplot2 to death, I still use this for a lot of projects. These days, I try to standardize to Python since R is really only used in academia.

#### Creative software

- ✱ **TouchDesigner:** TouchDesigner is for the artist within you that just wants to connect nodes to create amazing generative beauty. Sit with it for a night and use it to power your projectors if you end up nerding too long in it. Cyborgs need to keep a high quality of aesthetic to create tomorrow's interfaces.
- ✱ **Unreal Engine:** To create hyperreal applications for your VR device or just for fun, use Unreal Engine. **Blender** is its open source compliment and is an amazing piece of software.
- ✱ **OBS or Loom:** As any good cyborg knows, information is freedom. Hence, you should be able to share your discoveries and what you build. Set up OBS or Loom to record your screen and any webcams or external cameras. An amazing tool for all sorts of live video transmission across protocols and services.

## The AI tools
I'll quickly detail how I personally use AI here. Again, this excludes websites, specific cases within research projects, or even custom implementations of research assistants.
#### Language models and assistants

- **ChatGPT:** I had canceled my ChatGPT subscription after Claude Sonnet 3.5 came out but reactivated it after o1. o1 is highly capable and I recommend offloading most of your tasks to o1, if possible. However, the ChatGPT UI lacks a lot of AI-native features that Claude has down.
- **Claude:** I use Claude for most tasks since it has a nice balance of high capability, artifact editing, and workspaces. Of course, we also experiment on Claude models. Claude is also the most helpful when I want to build custom software.
- **Edge Copilot:** When you install Edge, you get access to a web Copilot that can e.g. explain debugging output from the console or anything on this web page. It's pretty great.
- **Alfred chatbot:** As mentioned earlier, I have a Workflow in Alfred 5 that enables me to use an N-context window chatbot through the OpenAI API. It runs a simple GPT-4o but is immensely useful for super quick queries.
- **Replicate:** A unified API to most open source models. Used for many of our experiments.
- **TogetherApi:** A unified APi to most open source models. Used for most of our experiments with open source models.
- **MistralAI:** Also mostly used for our experiments, MistralAI has access to their APIs.

#### Development and coding

- **Github Copilot:** I use Github Copilot in VSCode which is immensely helpful. It's mostly for the in-context programming. I have tried Cursor and its derivatives though the "aha!" moment is still missing for me.
- **Agents:** AI agents should really be designed for your own use cases and the base models are becoming capable enough that agents work. I've built multiple agents assisting with research, interacting on our Discord servers, or running custom operations on CRON jobs through my server.

#### Search and interface tools

- **Perplexity:** Perplexity is a search engine using AI summarization. It's mostly able to find pretty obscure things I want to find, though it's sometimes lacking.
- **Godmode:** This is an open source interface to work with multiple AI apps at once.

#### Creative tools

- **Midjourney:** Since I love art and design, I use Midjourney quite a bit to brainstorm and create cover images for various random projects and ideas. We also use it for work.
- **Udio:** I'm part of [Utilibeats](https://utilibeats.com/) where we create tracks using AI, mastered with AI, and augmented by humans. Highly recommend getting the dirt cheap subscription and playing around with music. See what the future looks like.