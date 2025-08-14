import { ApplicationInstanceDto } from './ApplicationInstanceDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationInstancesResponse extends SdkResponse {
    private 'application_instances'?: Array<ApplicationInstanceDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withApplicationInstances(applicationInstances: Array<ApplicationInstanceDto>): ListApplicationInstancesResponse {
        this['application_instances'] = applicationInstances;
        return this;
    }
    public set applicationInstances(applicationInstances: Array<ApplicationInstanceDto>  | undefined) {
        this['application_instances'] = applicationInstances;
    }
    public get applicationInstances(): Array<ApplicationInstanceDto> | undefined {
        return this['application_instances'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListApplicationInstancesResponse {
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