

export class SmsID {
    public createTime?: string;
    public from?: string;
    public originTo?: string;
    public smsMsgId?: string;
    public status?: string;
    public countryId?: string;
    public total?: number;
    public constructor() { 
    }
    public withCreateTime(createTime: string): SmsID {
        this['createTime'] = createTime;
        return this;
    }
    public withFrom(from: string): SmsID {
        this['from'] = from;
        return this;
    }
    public withOriginTo(originTo: string): SmsID {
        this['originTo'] = originTo;
        return this;
    }
    public withSmsMsgId(smsMsgId: string): SmsID {
        this['smsMsgId'] = smsMsgId;
        return this;
    }
    public withStatus(status: string): SmsID {
        this['status'] = status;
        return this;
    }
    public withCountryId(countryId: string): SmsID {
        this['countryId'] = countryId;
        return this;
    }
    public withTotal(total: number): SmsID {
        this['total'] = total;
        return this;
    }
}