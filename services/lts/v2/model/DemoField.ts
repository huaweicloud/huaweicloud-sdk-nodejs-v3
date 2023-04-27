

export class DemoField {
    private 'field_name': string | undefined;
    public content?: string;
    public type: DemoFieldTypeEnum;
    private 'is_analysis'?: boolean | undefined;
    public index?: number;
    public relation?: string;
    private 'user_defined_name'?: string | undefined;
    public constructor(fieldName?: any, type?: any) { 
        this['field_name'] = fieldName;
        this['type'] = type;
    }
    public withFieldName(fieldName: string): DemoField {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName() {
        return this['field_name'];
    }
    public withContent(content: string): DemoField {
        this['content'] = content;
        return this;
    }
    public withType(type: DemoFieldTypeEnum): DemoField {
        this['type'] = type;
        return this;
    }
    public withIsAnalysis(isAnalysis: boolean): DemoField {
        this['is_analysis'] = isAnalysis;
        return this;
    }
    public set isAnalysis(isAnalysis: boolean | undefined) {
        this['is_analysis'] = isAnalysis;
    }
    public get isAnalysis() {
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
    public set userDefinedName(userDefinedName: string | undefined) {
        this['user_defined_name'] = userDefinedName;
    }
    public get userDefinedName() {
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
