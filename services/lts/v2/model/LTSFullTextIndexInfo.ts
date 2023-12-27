

export class LTSFullTextIndexInfo {
    public enable?: boolean;
    public caseSensitive?: boolean;
    public includeChinese?: boolean;
    public tokenizer?: string;
    public ascii?: Array<string>;
    public constructor(enable?: boolean, caseSensitive?: boolean, includeChinese?: boolean, tokenizer?: string) { 
        this['enable'] = enable;
        this['caseSensitive'] = caseSensitive;
        this['includeChinese'] = includeChinese;
        this['tokenizer'] = tokenizer;
    }
    public withEnable(enable: boolean): LTSFullTextIndexInfo {
        this['enable'] = enable;
        return this;
    }
    public withCaseSensitive(caseSensitive: boolean): LTSFullTextIndexInfo {
        this['caseSensitive'] = caseSensitive;
        return this;
    }
    public withIncludeChinese(includeChinese: boolean): LTSFullTextIndexInfo {
        this['includeChinese'] = includeChinese;
        return this;
    }
    public withTokenizer(tokenizer: string): LTSFullTextIndexInfo {
        this['tokenizer'] = tokenizer;
        return this;
    }
    public withAscii(ascii: Array<string>): LTSFullTextIndexInfo {
        this['ascii'] = ascii;
        return this;
    }
}