import { InstanceMetadataEntryDto } from './InstanceMetadataEntryDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public instances?: Array<InstanceMetadataEntryDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceMetadataEntryDto>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListInstancesResponse {
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