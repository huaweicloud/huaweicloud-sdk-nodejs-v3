import { DomainType } from './DomainType';


export class CloseDomainNewReq {
    private 'domain_id'?: string;
    private 'auth_type'?: DomainType;
    public constructor(domainId?: string, authType?: DomainType) { 
        this['domain_id'] = domainId;
        this['auth_type'] = authType;
    }
    public withDomainId(domainId: string): CloseDomainNewReq {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAuthType(authType: DomainType): CloseDomainNewReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: DomainType  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): DomainType | undefined {
        return this['auth_type'];
    }
}