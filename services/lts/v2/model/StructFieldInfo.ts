

export class StructFieldInfo {
    public isAnalysis?: boolean;
    public content?: string;
    public fieldName?: string;
    public type?: string;
    public userDefinedName?: string;
    public index?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withIsAnalysis(isAnalysis: boolean): StructFieldInfo {
        this['isAnalysis'] = isAnalysis;
        return this;
    }
    public withContent(content: string): StructFieldInfo {
        this['content'] = content;
        return this;
    }
    public withFieldName(fieldName: string): StructFieldInfo {
        this['fieldName'] = fieldName;
        return this;
    }
    public withType(type: string): StructFieldInfo {
        this['type'] = type;
        return this;
    }
    public withUserDefinedName(userDefinedName: string): StructFieldInfo {
        this['userDefinedName'] = userDefinedName;
        return this;
    }
    public withIndex(index: number): StructFieldInfo {
        this['index'] = index;
        return this;
    }
}