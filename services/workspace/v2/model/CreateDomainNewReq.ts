import { AdDomain } from './AdDomain';
import { CreateUosDomainInfo } from './CreateUosDomainInfo';
import { DomainType } from './DomainType';


export class CreateDomainNewReq {
    private 'uos_domain_info'?: CreateUosDomainInfo;
    private 'ad_domain_info'?: AdDomain;
    private 'auth_type'?: DomainType;
    public constructor() { 
    }
    public withUosDomainInfo(uosDomainInfo: CreateUosDomainInfo): CreateDomainNewReq {
        this['uos_domain_info'] = uosDomainInfo;
        return this;
    }
    public set uosDomainInfo(uosDomainInfo: CreateUosDomainInfo  | undefined) {
        this['uos_domain_info'] = uosDomainInfo;
    }
    public get uosDomainInfo(): CreateUosDomainInfo | undefined {
        return this['uos_domain_info'];
    }
    public withAdDomainInfo(adDomainInfo: AdDomain): CreateDomainNewReq {
        this['ad_domain_info'] = adDomainInfo;
        return this;
    }
    public set adDomainInfo(adDomainInfo: AdDomain  | undefined) {
        this['ad_domain_info'] = adDomainInfo;
    }
    public get adDomainInfo(): AdDomain | undefined {
        return this['ad_domain_info'];
    }
    public withAuthType(authType: DomainType): CreateDomainNewReq {
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