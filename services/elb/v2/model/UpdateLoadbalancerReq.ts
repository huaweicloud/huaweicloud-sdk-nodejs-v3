

export class UpdateLoadbalancerReq {
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    public constructor() { 
    }
    public withName(name: string): UpdateLoadbalancerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateLoadbalancerReq {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateLoadbalancerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
}