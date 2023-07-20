

export class DemoField {
    private 'field_name'?: string;
    public content?: string;
    public type?: DemoFieldTypeEnum | string;
    private 'is_analysis'?: boolean;
    public index?: number;
    public relation?: string;
    private 'user_defined_name'?: string;
    public constructor(fieldName?: string, type?: string) { 
        this['field_name'] = fieldName;
        this['type'] = type;
    }
    public withFieldName(fieldName: string): DemoField {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withContent(content: string): DemoField {
        this['content'] = content;
        return this;
    }
    public withType(type: DemoFieldTypeEnum | string): DemoField {
        this['type'] = type;
        return this;
    }
    public withIsAnalysis(isAnalysis: boolean): DemoField {
        this['is_analysis'] = isAnalysis;
        return this;
    }
    public set isAnalysis(isAnalysis: boolean  | undefined) {
        this['is_analysis'] = isAnalysis;
    }
    public get isAnalysis(): boolean | undefined {
        return this['is_analysis'];
    }
    public withIndex(index: number): DemoField {
        this['index'] = index;
        return this;
    }
    public withRelation(relation: string): DemoField {
        this['relation'] = relation;
        return this;
    }
    public withUserDefinedName(userDefinedName: string): DemoField {
        this['user_defined_name'] = userDefinedName;
        return this;
    }
    public set userDefinedName(userDefinedName: string  | undefined) {
        this['user_defined_name'] = userDefinedName;
    }
    public get userDefinedName(): string | undefined {
        return this['user_defined_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DemoFieldTypeEnum {
    STRING = 'string',
    LONG = 'long',
    FLOAT = 'float'
}
