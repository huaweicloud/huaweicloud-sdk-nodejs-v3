

export class ImportHostToEnvironmentRequestBody {
    private 'group_id'?: string;
    private 'host_ids'?: Array<string>;
    public constructor(groupId?: string, hostIds?: Array<string>) { 
        this['group_id'] = groupId;
        this['host_ids'] = hostIds;
    }
    public withGroupId(groupId: string): ImportHostToEnvironmentRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostIds(hostIds: Array<string>): ImportHostToEnvironmentRequestBody {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
}