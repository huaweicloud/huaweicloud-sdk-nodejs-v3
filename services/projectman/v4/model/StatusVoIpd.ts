

export class StatusVoIpd {
    public name?: string;
    public belonging?: string;
    public constructor() { 
    }
    public withName(name: string): StatusVoIpd {
        this['name'] = name;
        return this;
    }
    public withBelonging(belonging: string): StatusVoIpd {
        this['belonging'] = belonging;
        return this;
    }
}