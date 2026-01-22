

export class UpdateFirewallNameRespData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateFirewallNameRespData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateFirewallNameRespData {
        this['name'] = name;
        return this;
    }
}