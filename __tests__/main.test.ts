import { main } from "../src/main";

// test対象の生成には https://your-webtool.app/tools/anagram を使用した。
describe("文字列の入れ替えパターン列挙", () => {
	it("abc", () => {
		expect(main("abc")).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
	});
	it("abcd", () => {
		// prettier-ignore
		expect(main("abcd")).toEqual([
			"abcd", "abdc", "acbd", "acdb", "adbc", "adcb",
			"bacd", "badc", "bcad", "bcda", "bdac", "bdca",
			"cabd", "cadb", "cbad", "cbda", "cdab", "cdba",
			"dabc", "dacb", "dbac", "dbca", "dcab", "dcba",
		]);
	});
	it("abcde", () => {
		// prettier-ignore
		expect(main("abcde")).toEqual([
			"abcde", "abced", "abdce", "abdec", "abecd", "abedc",
			"acbde", "acbed", "acdbe", "acdeb", "acebd", "acedb",
			"adbce", "adbec", "adcbe", "adceb", "adebc", "adecb",
			"aebcd", "aebdc", "aecbd", "aecdb", "aedbc", "aedcb",
			"bacde", "baced", "badce", "badec", "baecd", "baedc",
			"bcade", "bcaed", "bcdae", "bcdea", "bcead", "bceda",
			"bdace", "bdaec", "bdcae", "bdcea", "bdeac", "bdeca",
			"beacd", "beadc", "becad", "becda", "bedac", "bedca",
			"cabde", "cabed", "cadbe", "cadeb", "caebd", "caedb",
			"cbade", "cbaed", "cbdae", "cbdea", "cbead", "cbeda",
			"cdabe", "cdaeb", "cdbae", "cdbea", "cdeab", "cdeba",
			"ceabd", "ceadb", "cebad", "cebda", "cedab", "cedba",
			"dabce", "dabec", "dacbe", "daceb", "daebc", "daecb",
			"dbace", "dbaec", "dbcae", "dbcea", "dbeac", "dbeca",
			"dcabe", "dcaeb", "dcbae", "dcbea", "dceab", "dceba",
			"deabc", "deacb", "debac", "debca", "decab", "decba",
			"eabcd", "eabdc", "eacbd", "eacdb", "eadbc", "eadcb",
			"ebacd", "ebadc", "ebcad", "ebcda", "ebdac", "ebdca",
			"ecabd", "ecadb", "ecbad", "ecbda", "ecdab", "ecdba",
			"edabc", "edacb", "edbac", "edbca", "edcab", "edcba"
		]);
	});
});
