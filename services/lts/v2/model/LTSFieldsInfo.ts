

export class LTSFieldsInfo {
    public fieldType?: LTSFieldsInfoFieldTypeEnum | string;
    public fieldName?: string;
    public caseSensitive?: boolean;
    public includeChinese?: boolean;
    public tokenizer?: string;
    public quickAnalysis?: boolean;
    public ascii?: Array<string>;
    public constructor(fieldType?: string, fieldName?: string, tokenizer?: string) { 
        this['fieldType'] = fieldType;
        this['fieldName'] = fieldName;
        this['tokenizer'] = tokenizer;
    }
    public withFieldType(fieldType: LTSFieldsInfoFieldTypeEnum | string): LTSFieldsInfo {
        this['fieldType'] = fieldType;
        return this;
    }
    public withFieldName(fieldName: string): LTSFieldsInfo {
        this['fieldName'] = fieldName;
        return this;
    }
    public withCaseSensitive(caseSensitive: boolean): LTSFieldsInfo {
        this['caseSensitive'] = caseSensitive;
        return this;
    }
    public withIncludeChinese(includeChinese: boolean): LTSFieldsInfo {
        this['includeChinese'] = includeChinese;
        return this;
    }
    public withTokenizer(tokenizer: string): LTSFieldsInfo {
        this['tokenizer'] = tokenizer;
        return this;
    }
    public withQuickAnalysis(quickAnalysis: boolean): LTSFieldsInfo {
        this['quickAnalysis'] = quickAnalysis;
        return this;
    }
    public withAscii(ascii: Array<string>): LTSFieldsInfo {
        this['ascii'] = ascii;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LTSFieldsInfoFieldTypeEnum {
    STRING = 'string',
    LONG = 'long',
    FLOAT = 'float'
}
