

export class CreateWhiteBlackIpRuleRequestBody {
    public name: string;
    public addr?: string;
    public description?: string;
    public white: number;
    private 'ip_group_id'?: string | undefined;
    public constructor(name?: any, white?: any) { 
        this['name'] = name;
        this['white'] = white;
    }
    public withName(name: string): CreateWhiteBlackIpRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withAddr(addr: string): CreateWhiteBlackIpRuleRequestBody {
        this['addr'] = addr;
        return this;
    }
    public withDescription(description: string): CreateWhiteBlackIpRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withWhite(white: number): CreateWhiteBlackIpRuleRequestBody {
        this['white'] = white;
        return this;
    }
    public withIpGroupId(ipGroupId: string): CreateWhiteBlackIpRuleRequestBody {
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