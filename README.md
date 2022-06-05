# textlint-rule-no-difficult-words

A textlint rule to disallow difficult words.

```bash
$ textlint privacy-policy.txt

/home/hata6502/privacy-policy.txt
  194:36  warning  Difficult word: identifiable   no-difficult-words
  508:48  warning  Difficult word: investigatory  no-difficult-words

```

Use cases

- Find difficult words in your privacy policy and disclaimer documentation.
  - This helps lawyers create readable documents.
- Develop your web application in English, but use readable words to make it easier for users in other regions.

## Install

Install with [npm](https://www.npmjs.com/):

```bash
npm install textlint-rule-no-difficult-words
```

## Usage

Via `.textlintrc`

```json
{
  "rules": {
    "no-difficult-words": {
      "severity": "warning"
    }
  }
}
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```bash
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```bash
npm test
```

## License

MIT © Tomoyuki Hata
