

export class LTSSubFieldsInfo {
    public fieldType?: LTSSubFieldsInfoFieldTypeEnum | string;
    public fieldName?: string;
    public quickAnalysis?: boolean;
    public fieldAnalysisAlias?: string;
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
    public withQuickAnalysis(quickAnalysis: boolean): LTSSubFieldsInfo {
        this['quickAnalysis'] = quickAnalysis;
        return this;
    }
    public withFieldAnalysisAlias(fieldAnalysisAlias: string): LTSSubFieldsInfo {
        this['fieldAnalysisAlias'] = fieldAnalysisAlias;
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
