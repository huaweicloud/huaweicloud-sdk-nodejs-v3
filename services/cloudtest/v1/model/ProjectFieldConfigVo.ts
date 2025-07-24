import { NameAndIdVo } from './NameAndIdVo';
import { ProjectFieldConfigOptionVo } from './ProjectFieldConfigOptionVo';


export class ProjectFieldConfigVo {
    public uri?: string;
    public updator?: NameAndIdVo;
    public description?: string;
    public customName?: string;
    private 'table_field_name'?: string;
    private 'value_type'?: string;
    private 'value_type_name'?: string;
    private 'is_system'?: number;
    private 'is_display'?: number;
    private 'is_required'?: number;
    private 'sort_numb'?: number;
    private 'default_value'?: string;
    private 'custom_field_uri'?: string;
    private 'resource_type'?: string;
    public creator?: NameAndIdVo;
    private 'create_time_stamp'?: number;
    private 'update_time_stamp'?: number;
    private 'project_uuid'?: string;
    private 'option_vos'?: Array<ProjectFieldConfigOptionVo>;
    private 'custom_field_id'?: number;
    private 'custom_field_name'?: string;
    private 'custom_field_param'?: string;
    public constructor() { 
    }
    public withUri(uri: string): ProjectFieldConfigVo {
        this['uri'] = uri;
        return this;
    }
    public withUpdator(updator: NameAndIdVo): ProjectFieldConfigVo {
        this['updator'] = updator;
        return this;
    }
    public withDescription(description: string): ProjectFieldConfigVo {
        this['description'] = description;
        return this;
    }
    public withCustomName(customName: string): ProjectFieldConfigVo {
        this['customName'] = customName;
        return this;
    }
    public withTableFieldName(tableFieldName: string): ProjectFieldConfigVo {
        this['table_field_name'] = tableFieldName;
        return this;
    }
    public set tableFieldName(tableFieldName: string  | undefined) {
        this['table_field_name'] = tableFieldName;
    }
    public get tableFieldName(): string | undefined {
        return this['table_field_name'];
    }
    public withValueType(valueType: string): ProjectFieldConfigVo {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withValueTypeName(valueTypeName: string): ProjectFieldConfigVo {
        this['value_type_name'] = valueTypeName;
        return this;
    }
    public set valueTypeName(valueTypeName: string  | undefined) {
        this['value_type_name'] = valueTypeName;
    }
    public get valueTypeName(): string | undefined {
        return this['value_type_name'];
    }
    public withIsSystem(isSystem: number): ProjectFieldConfigVo {
        this['is_system'] = isSystem;
        return this;
    }
    public set isSystem(isSystem: number  | undefined) {
        this['is_system'] = isSystem;
    }
    public get isSystem(): number | undefined {
        return this['is_system'];
    }
    public withIsDisplay(isDisplay: number): ProjectFieldConfigVo {
        this['is_display'] = isDisplay;
        return this;
    }
    public set isDisplay(isDisplay: number  | undefined) {
        this['is_display'] = isDisplay;
    }
    public get isDisplay(): number | undefined {
        return this['is_display'];
    }
    public withIsRequired(isRequired: number): ProjectFieldConfigVo {
        this['is_required'] = isRequired;
        return this;
    }
    public set isRequired(isRequired: number  | undefined) {
        this['is_required'] = isRequired;
    }
    public get isRequired(): number | undefined {
        return this['is_required'];
    }
    public withSortNumb(sortNumb: number): ProjectFieldConfigVo {
        this['sort_numb'] = sortNumb;
        return this;
    }
    public set sortNumb(sortNumb: number  | undefined) {
        this['sort_numb'] = sortNumb;
    }
    public get sortNumb(): number | undefined {
        return this['sort_numb'];
    }
    public withDefaultValue(defaultValue: string): ProjectFieldConfigVo {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withCustomFieldUri(customFieldUri: string): ProjectFieldConfigVo {
        this['custom_field_uri'] = customFieldUri;
        return this;
    }
    public set customFieldUri(customFieldUri: string  | undefined) {
        this['custom_field_uri'] = customFieldUri;
    }
    public get customFieldUri(): string | undefined {
        return this['custom_field_uri'];
    }
    public withResourceType(resourceType: string): ProjectFieldConfigVo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCreator(creator: NameAndIdVo): ProjectFieldConfigVo {
        this['creator'] = creator;
        return this;
    }
    public withCreateTimeStamp(createTimeStamp: number): ProjectFieldConfigVo {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): ProjectFieldConfigVo {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
    public withProjectUuid(projectUuid: string): ProjectFieldConfigVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withOptionVos(optionVos: Array<ProjectFieldConfigOptionVo>): ProjectFieldConfigVo {
        this['option_vos'] = optionVos;
        return this;
    }
    public set optionVos(optionVos: Array<ProjectFieldConfigOptionVo>  | undefined) {
        this['option_vos'] = optionVos;
    }
    public get optionVos(): Array<ProjectFieldConfigOptionVo> | undefined {
        return this['option_vos'];
    }
    public withCustomFieldId(customFieldId: number): ProjectFieldConfigVo {
        this['custom_field_id'] = customFieldId;
        return this;
    }
    public set customFieldId(customFieldId: number  | undefined) {
        this['custom_field_id'] = customFieldId;
    }
    public get customFieldId(): number | undefined {
        return this['custom_field_id'];
    }
    public withCustomFieldName(customFieldName: string): ProjectFieldConfigVo {
        this['custom_field_name'] = customFieldName;
        return this;
    }
    public set customFieldName(customFieldName: string  | undefined) {
        this['custom_field_name'] = customFieldName;
    }
    public get customFieldName(): string | undefined {
        return this['custom_field_name'];
    }
    public withCustomFieldParam(customFieldParam: string): ProjectFieldConfigVo {
        this['custom_field_param'] = customFieldParam;
        return this;
    }
    public set customFieldParam(customFieldParam: string  | undefined) {
        this['custom_field_param'] = customFieldParam;
    }
    public get customFieldParam(): string | undefined {
        return this['custom_field_param'];
    }
}