

export class SwitchIpGroupRequestBodyIpGroups {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): SwitchIpGroupRequestBodyIpGroups {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): SwitchIpGroupRequestBodyIpGroups {
        this['description'] = description;
        return this;
    }
}