

export class DeleteIpGroupRequest {
    private 'ip_group_id': string | undefined;
    public constructor(ipGroupId?: any) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): DeleteIpGroupRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId() {
        return this['ip_group_id'];
    }
}