

export class FieldModel {
    private 'field_name': string | undefined;
    private 'is_analysis'?: boolean | undefined;
    public constructor(fieldName?: any) { 
        this['field_name'] = fieldName;
    }
    public withFieldName(fieldName: string): FieldModel {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName() {
        return this['field_name'];
    }
    public withIsAnalysis(isAnalysis: boolean): FieldModel {
        this['is_analysis'] = isAnalysis;
        return this;
    }
    public set isAnalysis(isAnalysis: boolean | undefined) {
        this['is_analysis'] = isAnalysis;
    }
    public get isAnalysis() {
        return this['is_analysis'];
    }
}