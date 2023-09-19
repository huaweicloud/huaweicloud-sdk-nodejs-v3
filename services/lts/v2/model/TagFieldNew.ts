

export class TagFieldNew {
    private 'field_name'?: string;
    public content?: string;
    public type?: TagFieldNewTypeEnum | string;
    private 'is_analysis'?: boolean;
    public index?: number;
    public constructor(fieldName?: string, type?: string) { 
        this['field_name'] = fieldName;
        this['type'] = type;
    }
    public withFieldName(fieldName: string): TagFieldNew {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withContent(content: string): TagFieldNew {
        this['content'] = content;
        return this;
    }
    public withType(type: TagFieldNewTypeEnum | string): TagFieldNew {
        this['type'] = type;
        return this;
    }
    public withIsAnalysis(isAnalysis: boolean): TagFieldNew {
        this['is_analysis'] = isAnalysis;
        return this;
    }
    public set isAnalysis(isAnalysis: boolean  | undefined) {
        this['is_analysis'] = isAnalysis;
    }
    public get isAnalysis(): boolean | undefined {
        return this['is_analysis'];
    }
    public withIndex(index: number): TagFieldNew {
        this['index'] = index;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TagFieldNewTypeEnum {
    STRING = 'string',
    LONG = 'long',
    FLOAT = 'float'
}
