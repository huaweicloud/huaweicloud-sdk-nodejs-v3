

export class ApiOutline {
    private 'auth_type'?: string;
    private 'run_env_name'?: string;
    private 'group_name'?: string;
    private 'publish_id'?: string;
    private 'group_id'?: string;
    public name?: string;
    public remark?: string;
    private 'run_env_id'?: string;
    public id?: string;
    private 'req_uri'?: string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withAuthType(authType: string): ApiOutline {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withRunEnvName(runEnvName: string): ApiOutline {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withGroupName(groupName: string): ApiOutline {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPublishId(publishId: string): ApiOutline {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withGroupId(groupId: string): ApiOutline {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): ApiOutline {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): ApiOutline {
        this['remark'] = remark;
        return this;
    }
    public withRunEnvId(runEnvId: string): ApiOutline {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withId(id: string): ApiOutline {
        this['id'] = id;
        return this;
    }
    public withReqUri(reqUri: string): ApiOutline {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTags(tags: Array<string>): ApiOutline {
        this['tags'] = tags;
        return this;
    }
}