

export class ShowDeploymentHostDetailRequest {
    private 'group_id': string | undefined;
    private 'host_id': string | undefined;
    public constructor(groupId?: any, hostId?: any) { 
        this['group_id'] = groupId;
        this['host_id'] = hostId;
    }
    public withGroupId(groupId: string): ShowDeploymentHostDetailRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withHostId(hostId: string): ShowDeploymentHostDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
}