

export class TagFieldsInfo {
    public fieldName?: string;
    public type?: string;
    public content?: string;
    public isAnalysis?: boolean;
    public index?: number;
    public constructor() { 
    }
    public withFieldName(fieldName: string): TagFieldsInfo {
        this['fieldName'] = fieldName;
        return this;
    }
    public withType(type: string): TagFieldsInfo {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): TagFieldsInfo {
        this['content'] = content;
        return this;
    }
    public withIsAnalysis(isAnalysis: boolean): TagFieldsInfo {
        this['isAnalysis'] = isAnalysis;
        return this;
    }
    public withIndex(index: number): TagFieldsInfo {
        this['index'] = index;
        return this;
    }
}