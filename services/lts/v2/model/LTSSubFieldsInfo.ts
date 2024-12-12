

export class LTSSubFieldsInfo {
    public fieldType?: LTSSubFieldsInfoFieldTypeEnum | string;
    public fieldName?: string;
    public caseSensitive?: boolean;
    public includeChinese?: boolean;
    public tokenizer?: string;
    public quickAnalysis?: boolean;
    public ascii?: Array<string>;
    public constructor(fieldType?: string, fieldName?: string) { 
        this['fieldType'] = fieldType;
        this['fieldName'] = fieldName;
    }
    public withFieldType(fieldType: LTSSubFieldsInfoFieldTypeEnum | string): LTSSubFieldsInfo {
        this['fieldType'] = fieldType;
        return this;
    }
    public withFieldName(fieldName: string): LTSSubFieldsInfo {
        this['fieldName'] = fieldName;
        return this;
    }
    public withCaseSensitive(caseSensitive: boolean): LTSSubFieldsInfo {
        this['caseSensitive'] = caseSensitive;
        return this;
    }
    public withIncludeChinese(includeChinese: boolean): LTSSubFieldsInfo {
        this['includeChinese'] = includeChinese;
        return this;
    }
    public withTokenizer(tokenizer: string): LTSSubFieldsInfo {
        this['tokenizer'] = tokenizer;
        return this;
    }
    public withQuickAnalysis(quickAnalysis: boolean): LTSSubFieldsInfo {
        this['quickAnalysis'] = quickAnalysis;
        return this;
    }
    public withAscii(ascii: Array<string>): LTSSubFieldsInfo {
        this['ascii'] = ascii;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LTSSubFieldsInfoFieldTypeEnum {
    STRING = 'string',
    LONG = 'long',
    FLOAT = 'float'
}
