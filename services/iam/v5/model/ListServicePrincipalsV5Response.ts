import { PageInfo } from './PageInfo';
import { ServicePrincipalMetadata } from './ServicePrincipalMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServicePrincipalsV5Response extends SdkResponse {
    private 'service_principals'?: Array<ServicePrincipalMetadata>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withServicePrincipals(servicePrincipals: Array<ServicePrincipalMetadata>): ListServicePrincipalsV5Response {
        this['service_principals'] = servicePrincipals;
        return this;
    }
    public set servicePrincipals(servicePrincipals: Array<ServicePrincipalMetadata>  | undefined) {
        this['service_principals'] = servicePrincipals;
    }
    public get servicePrincipals(): Array<ServicePrincipalMetadata> | undefined {
        return this['service_principals'];
    }
    public withPageInfo(pageInfo: PageInfo): ListServicePrincipalsV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}