

export class MappingSourceFieldVO {
    private 'target_field_id'?: number;
    private 'target_field_name'?: string;
    private 'field_ids'?: string;
    private 'transform_expression'?: string;
    private 'field_names'?: Array<string>;
    public changed?: boolean;
    public constructor(targetFieldName?: string) { 
        this['target_field_name'] = targetFieldName;
    }
    public withTargetFieldId(targetFieldId: number): MappingSourceFieldVO {
        this['target_field_id'] = targetFieldId;
        return this;
    }
    public set targetFieldId(targetFieldId: number  | undefined) {
        this['target_field_id'] = targetFieldId;
    }
    public get targetFieldId(): number | undefined {
        return this['target_field_id'];
    }
    public withTargetFieldName(targetFieldName: string): MappingSourceFieldVO {
        this['target_field_name'] = targetFieldName;
        return this;
    }
    public set targetFieldName(targetFieldName: string  | undefined) {
        this['target_field_name'] = targetFieldName;
    }
    public get targetFieldName(): string | undefined {
        return this['target_field_name'];
    }
    public withFieldIds(fieldIds: string): MappingSourceFieldVO {
        this['field_ids'] = fieldIds;
        return this;
    }
    public set fieldIds(fieldIds: string  | undefined) {
        this['field_ids'] = fieldIds;
    }
    public get fieldIds(): string | undefined {
        return this['field_ids'];
    }
    public withTransformExpression(transformExpression: string): MappingSourceFieldVO {
        this['transform_expression'] = transformExpression;
        return this;
    }
    public set transformExpression(transformExpression: string  | undefined) {
        this['transform_expression'] = transformExpression;
    }
    public get transformExpression(): string | undefined {
        return this['transform_expression'];
    }
    public withFieldNames(fieldNames: Array<string>): MappingSourceFieldVO {
        this['field_names'] = fieldNames;
        return this;
    }
    public set fieldNames(fieldNames: Array<string>  | undefined) {
        this['field_names'] = fieldNames;
    }
    public get fieldNames(): Array<string> | undefined {
        return this['field_names'];
    }
    public withChanged(changed: boolean): MappingSourceFieldVO {
        this['changed'] = changed;
        return this;
    }
}