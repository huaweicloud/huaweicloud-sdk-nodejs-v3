

export class TagField {
    public fieldName: string;
    public type: string;
    public content?: string;
    public isAnalysis?: boolean;
    public constructor(fieldName?: any, type?: any) { 
        this['fieldName'] = fieldName;
        this['type'] = type;
    }
    public withFieldName(fieldName: string): TagField {
        this['fieldName'] = fieldName;
        return this;
    }
    public withType(type: string): TagField {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): TagField {
        this['content'] = content;
        return this;
    }
    public withIsAnalysis(isAnalysis: boolean): TagField {
        this['isAnalysis'] = isAnalysis;
        return this;
    }
}