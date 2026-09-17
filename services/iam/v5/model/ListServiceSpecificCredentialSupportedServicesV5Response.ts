import { PageInfo } from './PageInfo';
import { SupportedService } from './SupportedService';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSpecificCredentialSupportedServicesV5Response extends SdkResponse {
    public services?: Array<SupportedService>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withServices(services: Array<SupportedService>): ListServiceSpecificCredentialSupportedServicesV5Response {
        this['services'] = services;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListServiceSpecificCredentialSupportedServicesV5Response {
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