(function () {
  const $footnotes = $(".footnotes"),
    sideNoteStartMargin = 12,
    sideNoteMaxWidth = 280,
    sideNoteMinWidth = 140;

  $(window).on("load", function () {
    if ($footnotes.length < 1) {
      return;
    }

    loadSideNotesFromFootnotes();

    $(window).resize(function () {
      loadSideNotesFromFootnotes();
    });
  });

  function loadSideNotesFromFootnotes() {
    const $content = $("content"),
      browserWidth = $content.width(),
      startPosition =
        $content.offset().left + $content.width() + sideNoteStartMargin;

    $(".sidenote").remove();
    $footnotes.show();

    if ($content.length < 1) {
      return;
    }

    const availableSpaceForSideNote = browserWidth - startPosition;

    if (availableSpaceForSideNote < sideNoteMinWidth) {
      return;
    }

    const $fnItems = $footnotes.find("ol li");

    $("sup[id^='fnref:']").each(function (index) {
      const footnoteId = $(this).attr("id").replace("fnref:", "");
      const $footnote = $fnItems.filter(`#fn\\:${footnoteId}`);
      if ($footnote.length) {
        const $footnoteHtml = $footnote.html();
        createSideNote($(this), $footnoteHtml, startPosition, footnoteId);
      }
    });

    $footnotes.hide();
  }

  function createSideNote(
    superscript,
    footnoteHtml,
    startPosition,
    footnoteId
  ) {
    let div = $("<div>")
      .html(footnoteHtml)
      .addClass("sidenote")
      .attr("id", `sidenote-${footnoteId}`);

    const topPosition = superscript.offset();

    div.css({
      position: "absolute",
      left: startPosition,
      top: topPosition.top,
      minWidth: sideNoteMinWidth,
      maxWidth: sideNoteMaxWidth,
    });

    // Remove the back-link from the sidenote
    div.find(".reversefootnote").remove();

    if (startPosition > 420) {
      superscript.hover(
        function () {
          div.addClass("sidenote-hover");
        },
        function () {
          div.removeClass("sidenote-hover");
        }
      );
    } else {
      div.addClass("sidenote-hover");
    }

    $(document.body).append(div);
  }
})();
