/*
Language: Aatbe
Requires: rust.js
Author: Andrei Dimitriu <author@aatbe-lang.org> (@Chronium)
Contributors:
Description: Syntax definition for aatbe-lang
Website: https://aatbe-lang.org
*/

var module = module ? module : {};

function hljsDefineAatbe(hljs) {
  const AAT_KEYWORDS = {
    keyword:
      "fn extern exp " +
      "var val " +
      "if else ret then bool " +
      "is as " +
      "rec const global type use " +
      "while until ",
    literal: "true false ()",
    built_in: "char str i8 i16 i32 i64 u8 u16 u32 u64 f32 f64",
  };

  const NUM_SUFFIX = "([ui](8|16|32|64|128)|f(32|64))?";

  const PARAMS = {
    className: "params",
    begin: /\\w*/,
    end: /\{|->/,
    endsParent: true,
  };

  return {
    case_insensitive: true,
    keywords: AAT_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        begin: '"',
        end: '"',
      },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + NUM_SUFFIX },
          { begin: "\\b0o([0-7_]+)" + NUM_SUFFIX },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + NUM_SUFFIX },
          {
            begin:
              "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUM_SUFFIX,
          },
        ],
        relevance: 0,
      },
      {
        className: "meta",
        begin: /@/,
        end: /$/,
      },
      {
        className: "class",
        beginKeywords: "rec type const global",
        end: /\(|$/,
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { endsParent: true }),
        ],
      },
      {
        className: "function",
        beginKeywords: "fn",
        end: /\{|->/,
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { endsParent: true }),
          PARAMS,
        ],
      },
      {
        className: "symbol",
        begin: /:[a-zA-Z_][a-zA-Z0-9_]*/,
      },
      {
        begin: "->",
      },
    ],
    aliases: ["aat"],
  };
}

module.exports = (hljs) => {
  hljs.registerLanguage("aatbe", hljsDefineAatbe);
};

module.exports.definer = hljsDefineAatbe;
