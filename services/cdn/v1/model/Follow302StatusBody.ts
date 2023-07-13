

export class Follow302StatusBody {
    private 'domain_id'?: string | undefined;
    private 'follow_status'?: Follow302StatusBodyFollowStatusEnum | undefined;
    public constructor() { 
    }
    public withDomainId(domainId: string): Follow302StatusBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withFollowStatus(followStatus: Follow302StatusBodyFollowStatusEnum): Follow302StatusBody {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: Follow302StatusBodyFollowStatusEnum | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus() {
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
