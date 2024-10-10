

export class UpdateWhiteBlackIpRuleRequestBody {
    public name?: string;
    public addr?: string;
    public description?: string;
    public white?: number;
    private 'ip_group_id'?: string;
    private 'time_mode'?: string;
    public start?: number;
    public terminal?: number;
    public constructor(name?: string, white?: number) { 
        this['name'] = name;
        this['white'] = white;
    }
    public withName(name: string): UpdateWhiteBlackIpRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withAddr(addr: string): UpdateWhiteBlackIpRuleRequestBody {
        this['addr'] = addr;
        return this;
    }
    public withDescription(description: string): UpdateWhiteBlackIpRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withWhite(white: number): UpdateWhiteBlackIpRuleRequestBody {
        this['white'] = white;
        return this;
    }
    public withIpGroupId(ipGroupId: string): UpdateWhiteBlackIpRuleRequestBody {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withTimeMode(timeMode: string): UpdateWhiteBlackIpRuleRequestBody {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withStart(start: number): UpdateWhiteBlackIpRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): UpdateWhiteBlackIpRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
}