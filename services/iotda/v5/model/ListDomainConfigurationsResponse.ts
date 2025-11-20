import { DomainConfigurationDTO } from './DomainConfigurationDTO';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainConfigurationsResponse extends SdkResponse {
    private 'domain_configurations'?: Array<DomainConfigurationDTO>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDomainConfigurations(domainConfigurations: Array<DomainConfigurationDTO>): ListDomainConfigurationsResponse {
        this['domain_configurations'] = domainConfigurations;
        return this;
    }
    public set domainConfigurations(domainConfigurations: Array<DomainConfigurationDTO>  | undefined) {
        this['domain_configurations'] = domainConfigurations;
    }
    public get domainConfigurations(): Array<DomainConfigurationDTO> | undefined {
        return this['domain_configurations'];
    }
    public withPage(page: Page): ListDomainConfigurationsResponse {
        this['page'] = page;
        return this;
    }
}