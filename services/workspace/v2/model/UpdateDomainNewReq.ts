import { AdDomain } from './AdDomain';
import { DomainType } from './DomainType';
import { UpdateUosDomainInfo } from './UpdateUosDomainInfo';


export class UpdateDomainNewReq {
    private 'uos_domain_info'?: UpdateUosDomainInfo;
    private 'ad_domain_info'?: AdDomain;
    private 'auth_type'?: DomainType;
    private 'auth_config_id'?: string;
    public constructor(authType?: DomainType) { 
        this['auth_type'] = authType;
    }
    public withUosDomainInfo(uosDomainInfo: UpdateUosDomainInfo): UpdateDomainNewReq {
        this['uos_domain_info'] = uosDomainInfo;
        return this;
    }
    public set uosDomainInfo(uosDomainInfo: UpdateUosDomainInfo  | undefined) {
        this['uos_domain_info'] = uosDomainInfo;
    }
    public get uosDomainInfo(): UpdateUosDomainInfo | undefined {
        return this['uos_domain_info'];
    }
    public withAdDomainInfo(adDomainInfo: AdDomain): UpdateDomainNewReq {
        this['ad_domain_info'] = adDomainInfo;
        return this;
    }
    public set adDomainInfo(adDomainInfo: AdDomain  | undefined) {
        this['ad_domain_info'] = adDomainInfo;
    }
    public get adDomainInfo(): AdDomain | undefined {
        return this['ad_domain_info'];
    }
    public withAuthType(authType: DomainType): UpdateDomainNewReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: DomainType  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): DomainType | undefined {
        return this['auth_type'];
    }
    public withAuthConfigId(authConfigId: string): UpdateDomainNewReq {
        this['auth_config_id'] = authConfigId;
        return this;
    }
    public set authConfigId(authConfigId: string  | undefined) {
        this['auth_config_id'] = authConfigId;
    }
    public get authConfigId(): string | undefined {
        return this['auth_config_id'];
    }
}