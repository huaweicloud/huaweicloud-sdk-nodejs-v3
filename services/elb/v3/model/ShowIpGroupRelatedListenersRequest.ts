

export class ShowIpGroupRelatedListenersRequest {
    private 'ipgroup_id'?: string;
    public constructor(ipgroupId?: string) { 
        this['ipgroup_id'] = ipgroupId;
    }
    public withIpgroupId(ipgroupId: string): ShowIpGroupRelatedListenersRequest {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string  | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId(): string | undefined {
        return this['ipgroup_id'];
    }
}