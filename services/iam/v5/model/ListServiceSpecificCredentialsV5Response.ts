import { PageInfo } from './PageInfo';
import { ServiceSpecificCredentialMetadata } from './ServiceSpecificCredentialMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSpecificCredentialsV5Response extends SdkResponse {
    private 'service_specific_credentials'?: Array<ServiceSpecificCredentialMetadata>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withServiceSpecificCredentials(serviceSpecificCredentials: Array<ServiceSpecificCredentialMetadata>): ListServiceSpecificCredentialsV5Response {
        this['service_specific_credentials'] = serviceSpecificCredentials;
        return this;
    }
    public set serviceSpecificCredentials(serviceSpecificCredentials: Array<ServiceSpecificCredentialMetadata>  | undefined) {
        this['service_specific_credentials'] = serviceSpecificCredentials;
    }
    public get serviceSpecificCredentials(): Array<ServiceSpecificCredentialMetadata> | undefined {
        return this['service_specific_credentials'];
    }
    public withPageInfo(pageInfo: PageInfo): ListServiceSpecificCredentialsV5Response {
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