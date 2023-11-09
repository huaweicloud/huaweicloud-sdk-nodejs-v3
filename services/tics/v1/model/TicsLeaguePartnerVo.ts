

export class TicsLeaguePartnerVo {
    public id?: string;
    private 'partner_domain_alias'?: string;
    private 'partner_domain_name'?: string;
    private 'partner_status'?: string;
    public constructor() { 
    }
    public withId(id: string): TicsLeaguePartnerVo {
        this['id'] = id;
        return this;
    }
    public withPartnerDomainAlias(partnerDomainAlias: string): TicsLeaguePartnerVo {
        this['partner_domain_alias'] = partnerDomainAlias;
        return this;
    }
    public set partnerDomainAlias(partnerDomainAlias: string  | undefined) {
        this['partner_domain_alias'] = partnerDomainAlias;
    }
    public get partnerDomainAlias(): string | undefined {
        return this['partner_domain_alias'];
    }
    public withPartnerDomainName(partnerDomainName: string): TicsLeaguePartnerVo {
        this['partner_domain_name'] = partnerDomainName;
        return this;
    }
    public set partnerDomainName(partnerDomainName: string  | undefined) {
        this['partner_domain_name'] = partnerDomainName;
    }
    public get partnerDomainName(): string | undefined {
        return this['partner_domain_name'];
    }
    public withPartnerStatus(partnerStatus: string): TicsLeaguePartnerVo {
        this['partner_status'] = partnerStatus;
        return this;
    }
    public set partnerStatus(partnerStatus: string  | undefined) {
        this['partner_status'] = partnerStatus;
    }
    public get partnerStatus(): string | undefined {
        return this['partner_status'];
    }
}