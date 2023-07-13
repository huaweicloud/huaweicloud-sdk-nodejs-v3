

export class StructFieldInfoReturn {
    public fieldName?: string;
    public type?: string;
    public content?: string;
    public isAnalysis?: boolean;
    public index?: number;
    public constructor() { 
    }
    public withFieldName(fieldName: string): StructFieldInfoReturn {
        this['fieldName'] = fieldName;
        return this;
    }
    public withType(type: string): StructFieldInfoReturn {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): StructFieldInfoReturn {
        this['content'] = content;
        return this;
    }
    public withIsAnalysis(isAnalysis: boolean): StructFieldInfoReturn {
        this['isAnalysis'] = isAnalysis;
        return this;
    }
    public withIndex(index: number): StructFieldInfoReturn {
        this['index'] = index;
        return this;
    }
}