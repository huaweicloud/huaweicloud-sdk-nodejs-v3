
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLayoutFieldResponse extends SdkResponse {
    public id?: string;
    private 'cloud_pack_id'?: string;
    private 'cloud_pack_name'?: string;
    private 'dataclass_id'?: string;
    private 'cloud_pack_version'?: string;
    private 'field_key'?: string;
    public name?: string;
    public description?: string;
    private 'en_description'?: string;
    private 'default_value'?: string;
    private 'en_default_value'?: string;
    private 'field_type'?: string;
    private 'extra_json'?: string;
    private 'field_tooltip'?: string;
    private 'en_field_tooltip'?: string;
    private 'json_schema'?: string;
    private 'is_built_in'?: boolean;
    private 'read_only'?: boolean;
    public required?: boolean;
    public searchable?: boolean;
    public visible?: boolean;
    public maintainable?: boolean;
    public editable?: boolean;
    public creatable?: boolean;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'wizard_id'?: string;
    private 'aopworkflow_id'?: string;
    private 'aopworkflow_version_id'?: string;
    private 'playbook_id'?: string;
    private 'playbook_version_id'?: string;
    private 'boa_version'?: string;
    public version?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateLayoutFieldResponse {
        this['id'] = id;
        return this;
    }
    public withCloudPackId(cloudPackId: string): CreateLayoutFieldResponse {
        this['cloud_pack_id'] = cloudPackId;
        return this;
    }
    public set cloudPackId(cloudPackId: string  | undefined) {
        this['cloud_pack_id'] = cloudPackId;
    }
    public get cloudPackId(): string | undefined {
        return this['cloud_pack_id'];
    }
    public withCloudPackName(cloudPackName: string): CreateLayoutFieldResponse {
        this['cloud_pack_name'] = cloudPackName;
        return this;
    }
    public set cloudPackName(cloudPackName: string  | undefined) {
        this['cloud_pack_name'] = cloudPackName;
    }
    public get cloudPackName(): string | undefined {
        return this['cloud_pack_name'];
    }
    public withDataclassId(dataclassId: string): CreateLayoutFieldResponse {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withCloudPackVersion(cloudPackVersion: string): CreateLayoutFieldResponse {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withFieldKey(fieldKey: string): CreateLayoutFieldResponse {
        this['field_key'] = fieldKey;
        return this;
    }
    public set fieldKey(fieldKey: string  | undefined) {
        this['field_key'] = fieldKey;
    }
    public get fieldKey(): string | undefined {
        return this['field_key'];
    }
    public withName(name: string): CreateLayoutFieldResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateLayoutFieldResponse {
        this['description'] = description;
        return this;
    }
    public withEnDescription(enDescription: string): CreateLayoutFieldResponse {
        this['en_description'] = enDescription;
        return this;
    }
    public set enDescription(enDescription: string  | undefined) {
        this['en_description'] = enDescription;
    }
    public get enDescription(): string | undefined {
        return this['en_description'];
    }
    public withDefaultValue(defaultValue: string): CreateLayoutFieldResponse {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withEnDefaultValue(enDefaultValue: string): CreateLayoutFieldResponse {
        this['en_default_value'] = enDefaultValue;
        return this;
    }
    public set enDefaultValue(enDefaultValue: string  | undefined) {
        this['en_default_value'] = enDefaultValue;
    }
    public get enDefaultValue(): string | undefined {
        return this['en_default_value'];
    }
    public withFieldType(fieldType: string): CreateLayoutFieldResponse {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withExtraJson(extraJson: string): CreateLayoutFieldResponse {
        this['extra_json'] = extraJson;
        return this;
    }
    public set extraJson(extraJson: string  | undefined) {
        this['extra_json'] = extraJson;
    }
    public get extraJson(): string | undefined {
        return this['extra_json'];
    }
    public withFieldTooltip(fieldTooltip: string): CreateLayoutFieldResponse {
        this['field_tooltip'] = fieldTooltip;
        return this;
    }
    public set fieldTooltip(fieldTooltip: string  | undefined) {
        this['field_tooltip'] = fieldTooltip;
    }
    public get fieldTooltip(): string | undefined {
        return this['field_tooltip'];
    }
    public withEnFieldTooltip(enFieldTooltip: string): CreateLayoutFieldResponse {
        this['en_field_tooltip'] = enFieldTooltip;
        return this;
    }
    public set enFieldTooltip(enFieldTooltip: string  | undefined) {
        this['en_field_tooltip'] = enFieldTooltip;
    }
    public get enFieldTooltip(): string | undefined {
        return this['en_field_tooltip'];
    }
    public withJsonSchema(jsonSchema: string): CreateLayoutFieldResponse {
        this['json_schema'] = jsonSchema;
        return this;
    }
    public set jsonSchema(jsonSchema: string  | undefined) {
        this['json_schema'] = jsonSchema;
    }
    public get jsonSchema(): string | undefined {
        return this['json_schema'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): CreateLayoutFieldResponse {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withReadOnly(readOnly: boolean): CreateLayoutFieldResponse {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withRequired(required: boolean): CreateLayoutFieldResponse {
        this['required'] = required;
        return this;
    }
    public withSearchable(searchable: boolean): CreateLayoutFieldResponse {
        this['searchable'] = searchable;
        return this;
    }
    public withVisible(visible: boolean): CreateLayoutFieldResponse {
        this['visible'] = visible;
        return this;
    }
    public withMaintainable(maintainable: boolean): CreateLayoutFieldResponse {
        this['maintainable'] = maintainable;
        return this;
    }
    public withEditable(editable: boolean): CreateLayoutFieldResponse {
        this['editable'] = editable;
        return this;
    }
    public withCreatable(creatable: boolean): CreateLayoutFieldResponse {
        this['creatable'] = creatable;
        return this;
    }
    public withCreatorId(creatorId: string): CreateLayoutFieldResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): CreateLayoutFieldResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): CreateLayoutFieldResponse {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): CreateLayoutFieldResponse {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withCreateTime(createTime: string): CreateLayoutFieldResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateLayoutFieldResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withWizardId(wizardId: string): CreateLayoutFieldResponse {
        this['wizard_id'] = wizardId;
        return this;
    }
    public set wizardId(wizardId: string  | undefined) {
        this['wizard_id'] = wizardId;
    }
    public get wizardId(): string | undefined {
        return this['wizard_id'];
    }
    public withAopworkflowId(aopworkflowId: string): CreateLayoutFieldResponse {
        this['aopworkflow_id'] = aopworkflowId;
        return this;
    }
    public set aopworkflowId(aopworkflowId: string  | undefined) {
        this['aopworkflow_id'] = aopworkflowId;
    }
    public get aopworkflowId(): string | undefined {
        return this['aopworkflow_id'];
    }
    public withAopworkflowVersionId(aopworkflowVersionId: string): CreateLayoutFieldResponse {
        this['aopworkflow_version_id'] = aopworkflowVersionId;
        return this;
    }
    public set aopworkflowVersionId(aopworkflowVersionId: string  | undefined) {
        this['aopworkflow_version_id'] = aopworkflowVersionId;
    }
    public get aopworkflowVersionId(): string | undefined {
        return this['aopworkflow_version_id'];
    }
    public withPlaybookId(playbookId: string): CreateLayoutFieldResponse {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withPlaybookVersionId(playbookVersionId: string): CreateLayoutFieldResponse {
        this['playbook_version_id'] = playbookVersionId;
        return this;
    }
    public set playbookVersionId(playbookVersionId: string  | undefined) {
        this['playbook_version_id'] = playbookVersionId;
    }
    public get playbookVersionId(): string | undefined {
        return this['playbook_version_id'];
    }
    public withBoaVersion(boaVersion: string): CreateLayoutFieldResponse {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
    public withVersion(version: string): CreateLayoutFieldResponse {
        this['version'] = version;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateLayoutFieldResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}