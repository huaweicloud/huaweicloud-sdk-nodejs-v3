

export class Follow302StatusBody {
    private 'domain_id'?: string;
    private 'follow_status'?: Follow302StatusBodyFollowStatusEnum | string;
    public constructor() { 
    }
    public withDomainId(domainId: string): Follow302StatusBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withFollowStatus(followStatus: Follow302StatusBodyFollowStatusEnum | string): Follow302StatusBody {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: Follow302StatusBodyFollowStatusEnum | string  | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus(): Follow302StatusBodyFollowStatusEnum | string | undefined {
        return this['follow_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Follow302StatusBodyFollowStatusEnum {
    OFF = 'off',
    ON = 'on'
}
