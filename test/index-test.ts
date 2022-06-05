import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();

tester.run("no-difficult-words", rule, {
  invalid: [
    {
      text: "日本語は無視される。personally identifiable identifiable, anthropocentricity. ",
      errors: [
        {
          type: "lint",
          ruleId: "no-difficult-words",
          message: "Difficult word: identifiable",
          index: 21,
          line: 1,
          column: 22,
          severity: 2,
        },
        {
          type: "lint",
          ruleId: "no-difficult-words",
          message: "Difficult word: identifiable",
          index: 34,
          line: 1,
          column: 35,
          severity: 2,
        },
        {
          type: "lint",
          ruleId: "no-difficult-words",
          message: "Difficult word: anthropocentricity",
          index: 48,
          line: 1,
          column: 49,
          severity: 2,
        },
      ],
    },
  ],
});
