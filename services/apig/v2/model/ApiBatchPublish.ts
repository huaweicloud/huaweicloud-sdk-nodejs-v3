

export class ApiBatchPublish {
    public apis?: Array<string>;
    private 'env_id'?: string;
    private 'group_id'?: string;
    public remark?: string;
    public constructor(envId?: string) { 
        this['env_id'] = envId;
    }
    public withApis(apis: Array<string>): ApiBatchPublish {
        this['apis'] = apis;
        return this;
    }
    public withEnvId(envId: string): ApiBatchPublish {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withGroupId(groupId: string): ApiBatchPublish {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRemark(remark: string): ApiBatchPublish {
        this['remark'] = remark;
        return this;
    }
}