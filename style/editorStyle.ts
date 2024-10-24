import { EditorView } from "@codemirror/view";
import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

// One Light Theme
const chalky = "#c18401",
  coral = "#ca1143",
  cyan = "#0184bc",
  invalid = "#a1a1a1",
  gray = "#a1a1a1",
  stone = "#383a42", // Brightened compared to original to increase contrast
  malibu = "#4078f2",
  sage = "#50a14f",
  whiskey = "#986801",
  violet = "#a626a4",
  darkBackground = "#cfd0d1",
  highlightBackground = "#a1a1a1",
  background = "#fafafa",
  tooltipBackground = "#383a42",
  selection = "#cfd0d1",
  cursor = "#526eff";

export const customHighlightStyle = HighlightStyle.define([
  {
    tag: tags.heading1,
    fontSize: "2.5em",
    fontWeight: 700,
  },
  {
    tag: tags.heading2,
    fontSize: "2em",
    fontWeight: 700,
  },
  { tag: tags.heading3, fontSize: "1.5em", fontWeight: 700 },
  { tag: tags.heading4, fontSize: "1.313em", fontWeight: 700 },
  {
    tag: tags.strong,
    fontSize: "1.125em",
    fontWeight: 700,
  },
  {
    tag: tags.emphasis,
    fontSize: "1.125em",
    fontStyle: "italic",
  },
  {
    tag: tags.strikethrough,
    fontSize: "1.125em",
    textDecoration: "line-through",
  },
  { tag: tags.keyword, color: violet },
  {
    tag: [
      tags.name,
      tags.deleted,
      tags.character,
      tags.propertyName,
      tags.macroName,
    ],
    color: stone,
  },
  { tag: [tags.function(tags.variableName), tags.labelName], color: malibu },
  {
    tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
    color: whiskey,
  },
  { tag: [tags.definition(tags.name), tags.separator], color: whiskey },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.modifier,
      tags.self,
      tags.namespace,
    ],
    color: chalky,
  },
  {
    tag: [
      tags.operator,
      tags.operatorKeyword,
      tags.url,
      tags.escape,
      tags.regexp,
      tags.link,
      tags.special(tags.string),
    ],
    color: cyan,
  },
  { tag: [tags.meta, tags.comment], color: stone },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.link, color: stone, textDecoration: "underline" },
  { tag: tags.heading, fontWeight: "bold", color: coral },
  {
    tag: [tags.atom, tags.bool, tags.special(tags.variableName)],
    color: malibu,
  },
  {
    tag: [tags.string, tags.inserted],
    color: sage,
  },
  { tag: tags.invalid, color: invalid },
]);

export const transparentTheme = EditorView.theme({
  "&": {
    backgroundColor: "#fafafa",
    height: "100%",
    color: "#212529",
    fontSize: "1.125em",
    lineHeight: "1.5",
  },
  "&.cm-focused": {
    outline: "none",
  },
  "&.cm-placeholder": {
    fontSize: "1.125em",
  },

  ".cm-content": {
    caretColor: cursor,
  },

  ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
    { backgroundColor: selection },

  ".cm-panels": { backgroundColor: darkBackground, color: background },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff",
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f",
  },

  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },

  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847",
  },

  ".cm-gutters": {
    backgroundColor: background,
    color: stone,
    border: "none",
  },

  ".cm-activeLineGutter": {
    backgroundColor: highlightBackground,
  },

  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd",
  },

  ".cm-tooltip": {
    border: "none",
    backgroundColor: tooltipBackground,
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: tooltipBackground,
    borderBottomColor: tooltipBackground,
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: highlightBackground,
      color: gray,
    },
  },
});
