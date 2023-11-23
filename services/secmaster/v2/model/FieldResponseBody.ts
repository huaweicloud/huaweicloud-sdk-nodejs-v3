

export class FieldResponseBody {
    public id?: string;
    private 'cloud_pack_version'?: string;
    private 'business_id'?: string;
    private 'business_type'?: string;
    private 'dataclass_name'?: string;
    private 'business_code'?: string;
    private 'field_key'?: string;
    public name?: string;
    public description?: string;
    private 'default_value'?: string;
    private 'display_type'?: string;
    private 'field_type'?: string;
    private 'extra_json'?: string;
    private 'field_tooltip'?: string;
    private 'iu_type'?: string;
    private 'used_by'?: string;
    private 'json_schema'?: string;
    private 'is_built_in'?: boolean;
    private 'case_sensitive'?: boolean;
    private 'read_only'?: boolean;
    public required?: boolean;
    public searchable?: boolean;
    public visible?: boolean;
    public maintainable?: boolean;
    public editable?: boolean;
    public creatable?: boolean;
    public mapping?: boolean;
    private 'target_api'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): FieldResponseBody {
        this['id'] = id;
        return this;
    }
    public withCloudPackVersion(cloudPackVersion: string): FieldResponseBody {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withBusinessId(businessId: string): FieldResponseBody {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: string  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): string | undefined {
        return this['business_id'];
    }
    public withBusinessType(businessType: string): FieldResponseBody {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withDataclassName(dataclassName: string): FieldResponseBody {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withBusinessCode(businessCode: string): FieldResponseBody {
        this['business_code'] = businessCode;
        return this;
    }
    public set businessCode(businessCode: string  | undefined) {
        this['business_code'] = businessCode;
    }
    public get businessCode(): string | undefined {
        return this['business_code'];
    }
    public withFieldKey(fieldKey: string): FieldResponseBody {
        this['field_key'] = fieldKey;
        return this;
    }
    public set fieldKey(fieldKey: string  | undefined) {
        this['field_key'] = fieldKey;
    }
    public get fieldKey(): string | undefined {
        return this['field_key'];
    }
    public withName(name: string): FieldResponseBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FieldResponseBody {
        this['description'] = description;
        return this;
    }
    public withDefaultValue(defaultValue: string): FieldResponseBody {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withDisplayType(displayType: string): FieldResponseBody {
        this['display_type'] = displayType;
        return this;
    }
    public set displayType(displayType: string  | undefined) {
        this['display_type'] = displayType;
    }
    public get displayType(): string | undefined {
        return this['display_type'];
    }
    public withFieldType(fieldType: string): FieldResponseBody {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withExtraJson(extraJson: string): FieldResponseBody {
        this['extra_json'] = extraJson;
        return this;
    }
    public set extraJson(extraJson: string  | undefined) {
        this['extra_json'] = extraJson;
    }
    public get extraJson(): string | undefined {
        return this['extra_json'];
    }
    public withFieldTooltip(fieldTooltip: string): FieldResponseBody {
        this['field_tooltip'] = fieldTooltip;
        return this;
    }
    public set fieldTooltip(fieldTooltip: string  | undefined) {
        this['field_tooltip'] = fieldTooltip;
    }
    public get fieldTooltip(): string | undefined {
        return this['field_tooltip'];
    }
    public withIuType(iuType: string): FieldResponseBody {
        this['iu_type'] = iuType;
        return this;
    }
    public set iuType(iuType: string  | undefined) {
        this['iu_type'] = iuType;
    }
    public get iuType(): string | undefined {
        return this['iu_type'];
    }
    public withUsedBy(usedBy: string): FieldResponseBody {
        this['used_by'] = usedBy;
        return this;
    }
    public set usedBy(usedBy: string  | undefined) {
        this['used_by'] = usedBy;
    }
    public get usedBy(): string | undefined {
        return this['used_by'];
    }
    public withJsonSchema(jsonSchema: string): FieldResponseBody {
        this['json_schema'] = jsonSchema;
        return this;
    }
    public set jsonSchema(jsonSchema: string  | undefined) {
        this['json_schema'] = jsonSchema;
    }
    public get jsonSchema(): string | undefined {
        return this['json_schema'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): FieldResponseBody {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withCaseSensitive(caseSensitive: boolean): FieldResponseBody {
        this['case_sensitive'] = caseSensitive;
        return this;
    }
    public set caseSensitive(caseSensitive: boolean  | undefined) {
        this['case_sensitive'] = caseSensitive;
    }
    public get caseSensitive(): boolean | undefined {
        return this['case_sensitive'];
    }
    public withReadOnly(readOnly: boolean): FieldResponseBody {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withRequired(required: boolean): FieldResponseBody {
        this['required'] = required;
        return this;
    }
    public withSearchable(searchable: boolean): FieldResponseBody {
        this['searchable'] = searchable;
        return this;
    }
    public withVisible(visible: boolean): FieldResponseBody {
        this['visible'] = visible;
        return this;
    }
    public withMaintainable(maintainable: boolean): FieldResponseBody {
        this['maintainable'] = maintainable;
        return this;
    }
    public withEditable(editable: boolean): FieldResponseBody {
        this['editable'] = editable;
        return this;
    }
    public withCreatable(creatable: boolean): FieldResponseBody {
        this['creatable'] = creatable;
        return this;
    }
    public withMapping(mapping: boolean): FieldResponseBody {
        this['mapping'] = mapping;
        return this;
    }
    public withTargetApi(targetApi: string): FieldResponseBody {
        this['target_api'] = targetApi;
        return this;
    }
    public set targetApi(targetApi: string  | undefined) {
        this['target_api'] = targetApi;
    }
    public get targetApi(): string | undefined {
        return this['target_api'];
    }
    public withCreatorId(creatorId: string): FieldResponseBody {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): FieldResponseBody {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): FieldResponseBody {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): FieldResponseBody {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withCreateTime(createTime: string): FieldResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): FieldResponseBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}