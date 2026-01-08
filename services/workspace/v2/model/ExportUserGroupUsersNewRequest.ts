

export class ExportUserGroupUsersNewRequest {
    private 'group_id'?: string;
    private 'user_name'?: string;
    public description?: string;
    private 'active_type'?: ExportUserGroupUsersNewRequestActiveTypeEnum | string;
    private 'group_name'?: string;
    public language?: ExportUserGroupUsersNewRequestLanguageEnum | string;
    private 'enterprise_project_id'?: string;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ExportUserGroupUsersNewRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withUserName(userName: string): ExportUserGroupUsersNewRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDescription(description: string): ExportUserGroupUsersNewRequest {
        this['description'] = description;
        return this;
    }
    public withActiveType(activeType: ExportUserGroupUsersNewRequestActiveTypeEnum | string): ExportUserGroupUsersNewRequest {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: ExportUserGroupUsersNewRequestActiveTypeEnum | string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): ExportUserGroupUsersNewRequestActiveTypeEnum | string | undefined {
        return this['active_type'];
    }
    public withGroupName(groupName: string): ExportUserGroupUsersNewRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withLanguage(language: ExportUserGroupUsersNewRequestLanguageEnum | string): ExportUserGroupUsersNewRequest {
        this['language'] = language;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportUserGroupUsersNewRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportUserGroupUsersNewRequestActiveTypeEnum {
    USER_ACTIVATE = 'USER_ACTIVATE',
    ADMIN_ACTIVATE = 'ADMIN_ACTIVATE'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportUserGroupUsersNewRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
