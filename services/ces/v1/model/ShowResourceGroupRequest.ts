

export class ShowResourceGroupRequest {
    private 'group_id'?: string;
    public status?: string;
    public namespace?: string;
    public dname?: string;
    public start?: string;
    public limit?: string;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ShowResourceGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStatus(status: string): ShowResourceGroupRequest {
        this['status'] = status;
        return this;
    }
    public withNamespace(namespace: string): ShowResourceGroupRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withDname(dname: string): ShowResourceGroupRequest {
        this['dname'] = dname;
        return this;
    }
    public withStart(start: string): ShowResourceGroupRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: string): ShowResourceGroupRequest {
        this['limit'] = limit;
        return this;
    }
}