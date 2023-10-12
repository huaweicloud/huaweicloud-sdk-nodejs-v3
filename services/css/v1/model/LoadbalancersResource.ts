

export class LoadbalancersResource {
    public id?: string;
    public name?: string;
    private 'l7_flavor_id'?: string;
    private 'ip_target_enable'?: boolean;
    public constructor() { 
    }
    public withId(id: string): LoadbalancersResource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LoadbalancersResource {
        this['name'] = name;
        return this;
    }
    public withL7FlavorId(l7FlavorId: string): LoadbalancersResource {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): LoadbalancersResource {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean  | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable(): boolean | undefined {
        return this['ip_target_enable'];
    }
}