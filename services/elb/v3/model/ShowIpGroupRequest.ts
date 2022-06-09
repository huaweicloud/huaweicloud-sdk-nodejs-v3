

export class ShowIpGroupRequest {
    private 'ipgroup_id': string | undefined;
    public constructor(ipgroupId?: any) { 
        this['ipgroup_id'] = ipgroupId;
    }
    public withIpgroupId(ipgroupId: string): ShowIpGroupRequest {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId() {
        return this['ipgroup_id'];
    }
}