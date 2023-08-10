import { ResourceGroupInfo } from './ResourceGroupInfo';
import { TotalMetaData } from './TotalMetaData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceGroupResponse extends SdkResponse {
    private 'resource_groups'?: Array<ResourceGroupInfo>;
    private 'meta_data'?: TotalMetaData;
    public constructor() { 
        super();
    }
    public withResourceGroups(resourceGroups: Array<ResourceGroupInfo>): ListResourceGroupResponse {
        this['resource_groups'] = resourceGroups;
        return this;
    }
    public set resourceGroups(resourceGroups: Array<ResourceGroupInfo>  | undefined) {
        this['resource_groups'] = resourceGroups;
    }
    public get resourceGroups(): Array<ResourceGroupInfo> | undefined {
        return this['resource_groups'];
    }
    public withMetaData(metaData: TotalMetaData): ListResourceGroupResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: TotalMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): TotalMetaData | undefined {
        return this['meta_data'];
    }
}