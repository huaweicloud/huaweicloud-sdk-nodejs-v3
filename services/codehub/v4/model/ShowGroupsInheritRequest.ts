

export class ShowGroupsInheritRequest {
    private 'group_id'?: number;
    private 'setting_type'?: ShowGroupsInheritRequestSettingTypeEnum | string;
    public constructor(groupId?: number, settingType?: string) { 
        this['group_id'] = groupId;
        this['setting_type'] = settingType;
    }
    public withGroupId(groupId: number): ShowGroupsInheritRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withSettingType(settingType: ShowGroupsInheritRequestSettingTypeEnum | string): ShowGroupsInheritRequest {
        this['setting_type'] = settingType;
        return this;
    }
    public set settingType(settingType: ShowGroupsInheritRequestSettingTypeEnum | string  | undefined) {
        this['setting_type'] = settingType;
    }
    public get settingType(): ShowGroupsInheritRequestSettingTypeEnum | string | undefined {
        return this['setting_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGroupsInheritRequestSettingTypeEnum {
    PROTECTED_BRANCHES = 'protected_branches',
    PROTECTED_TAGS = 'protected_tags',
    PUSH_RULES = 'push_rules',
    MERGE_REQUESTS = 'merge_requests',
    MR_BRANCH_POLICIES = 'mr_branch_policies',
    REVIEWS = 'reviews',
    E2E_SETTINGS = 'e2e_settings',
    WEBHOOK_SETTINGS = 'webhook_settings',
    DEPLOY_KEYS = 'deploy_keys',
    WATERMARK = 'watermark',
    REPOSITORY_SETTINGS = 'repository_settings'
}
