

export class ProjectTestCaseFieldVo {
    public uri?: string;
    public name?: string;
    public type?: string;
    public options?: string;
    public description?: string;
    public creator?: string;
    public updater?: string;
    private 'custom_field_id'?: number;
    private 'custom_field_name'?: string;
    private 'custom_field_param'?: string;
    private 'type_name'?: string;
    private 'create_time'?: Date;
    private 'create_time_timestamp'?: number;
    private 'update_time'?: Date;
    private 'update_time_timestamp'?: number;
    private 'project_uuid'?: string;
    public constructor() { 
    }
    public withUri(uri: string): ProjectTestCaseFieldVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): ProjectTestCaseFieldVo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ProjectTestCaseFieldVo {
        this['type'] = type;
        return this;
    }
    public withOptions(options: string): ProjectTestCaseFieldVo {
        this['options'] = options;
        return this;
    }
    public withDescription(description: string): ProjectTestCaseFieldVo {
        this['description'] = description;
        return this;
    }
    public withCreator(creator: string): ProjectTestCaseFieldVo {
        this['creator'] = creator;
        return this;
    }
    public withUpdater(updater: string): ProjectTestCaseFieldVo {
        this['updater'] = updater;
        return this;
    }
    public withCustomFieldId(customFieldId: number): ProjectTestCaseFieldVo {
        this['custom_field_id'] = customFieldId;
        return this;
    }
    public set customFieldId(customFieldId: number  | undefined) {
        this['custom_field_id'] = customFieldId;
    }
    public get customFieldId(): number | undefined {
        return this['custom_field_id'];
    }
    public withCustomFieldName(customFieldName: string): ProjectTestCaseFieldVo {
        this['custom_field_name'] = customFieldName;
        return this;
    }
    public set customFieldName(customFieldName: string  | undefined) {
        this['custom_field_name'] = customFieldName;
    }
    public get customFieldName(): string | undefined {
        return this['custom_field_name'];
    }
    public withCustomFieldParam(customFieldParam: string): ProjectTestCaseFieldVo {
        this['custom_field_param'] = customFieldParam;
        return this;
    }
    public set customFieldParam(customFieldParam: string  | undefined) {
        this['custom_field_param'] = customFieldParam;
    }
    public get customFieldParam(): string | undefined {
        return this['custom_field_param'];
    }
    public withTypeName(typeName: string): ProjectTestCaseFieldVo {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withCreateTime(createTime: Date): ProjectTestCaseFieldVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateTimeTimestamp(createTimeTimestamp: number): ProjectTestCaseFieldVo {
        this['create_time_timestamp'] = createTimeTimestamp;
        return this;
    }
    public set createTimeTimestamp(createTimeTimestamp: number  | undefined) {
        this['create_time_timestamp'] = createTimeTimestamp;
    }
    public get createTimeTimestamp(): number | undefined {
        return this['create_time_timestamp'];
    }
    public withUpdateTime(updateTime: Date): ProjectTestCaseFieldVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimeTimestamp(updateTimeTimestamp: number): ProjectTestCaseFieldVo {
        this['update_time_timestamp'] = updateTimeTimestamp;
        return this;
    }
    public set updateTimeTimestamp(updateTimeTimestamp: number  | undefined) {
        this['update_time_timestamp'] = updateTimeTimestamp;
    }
    public get updateTimeTimestamp(): number | undefined {
        return this['update_time_timestamp'];
    }
    public withProjectUuid(projectUuid: string): ProjectTestCaseFieldVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}