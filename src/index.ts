import { TextlintRuleReporter } from "@textlint/types";
// @ts-expect-error
import textReadability from "text-readability";

const reporter: TextlintRuleReporter = (context) => {
  const { getSource, report, RuleError, Syntax } = context;

  return {
    [Syntax.Str](node) {
      const text = getSource(node);

      const difficultWordsSet: Set<string> = textReadability.difficultWordsSet(
        text,
        6
      );

      difficultWordsSet.forEach((difficultWord) => {
        let index = -1;

        while ((index = text.indexOf(difficultWord, index + 1)) !== -1) {
          report(
            node,
            new RuleError(`Difficult word: ${difficultWord}`, {
              index,
            })
          );
        }
      });
    },
  };
};

export default reporter;
