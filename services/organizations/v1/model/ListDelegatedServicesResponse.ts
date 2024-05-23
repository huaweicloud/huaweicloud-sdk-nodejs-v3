import { DelegatedServiceDto } from './DelegatedServiceDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDelegatedServicesResponse extends SdkResponse {
    private 'delegated_services'?: Array<DelegatedServiceDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withDelegatedServices(delegatedServices: Array<DelegatedServiceDto>): ListDelegatedServicesResponse {
        this['delegated_services'] = delegatedServices;
        return this;
    }
    public set delegatedServices(delegatedServices: Array<DelegatedServiceDto>  | undefined) {
        this['delegated_services'] = delegatedServices;
    }
    public get delegatedServices(): Array<DelegatedServiceDto> | undefined {
        return this['delegated_services'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListDelegatedServicesResponse {
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