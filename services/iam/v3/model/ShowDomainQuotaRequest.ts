

export class ShowDomainQuotaRequest {
    private 'domain_id'?: string;
    public type?: ShowDomainQuotaRequestTypeEnum | string;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowDomainQuotaRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: ShowDomainQuotaRequestTypeEnum | string): ShowDomainQuotaRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainQuotaRequestTypeEnum {
    USER = 'user',
    GROUP = 'group',
    IDP = 'idp',
    AGENCY = 'agency',
    POLICY = 'policy',
    ASSIGMENT_GROUP_MP = 'assigment_group_mp',
    ASSIGMENT_AGENCY_MP = 'assigment_agency_mp',
    ASSIGMENT_GROUP_EP = 'assigment_group_ep',
    ASSIGMENT_USER_EP = 'assigment_user_ep',
    MAPPING = 'mapping'
}
