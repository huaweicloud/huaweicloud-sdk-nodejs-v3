import { PageInfoDto } from './PageInfoDto';
import { TrustedServiceDto } from './TrustedServiceDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrustedServicesResponse extends SdkResponse {
    private 'trusted_services'?: Array<TrustedServiceDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withTrustedServices(trustedServices: Array<TrustedServiceDto>): ListTrustedServicesResponse {
        this['trusted_services'] = trustedServices;
        return this;
    }
    public set trustedServices(trustedServices: Array<TrustedServiceDto>  | undefined) {
        this['trusted_services'] = trustedServices;
    }
    public get trustedServices(): Array<TrustedServiceDto> | undefined {
        return this['trusted_services'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListTrustedServicesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}