import { ResInstanceBody } from './ResInstanceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceInstancesResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<ResInstanceBody>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowResourceInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<ResInstanceBody>): ShowResourceInstancesResponse {
        this['resources'] = resources;
        return this;
    }
}