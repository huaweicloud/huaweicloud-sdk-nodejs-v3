

export class ShowHostDetailRequest {
    private 'group_id'?: string;
    private 'host_id'?: string;
    public constructor(groupId?: string, hostId?: string) { 
        this['group_id'] = groupId;
        this['host_id'] = hostId;
    }
    public withGroupId(groupId: string): ShowHostDetailRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostId(hostId: string): ShowHostDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}