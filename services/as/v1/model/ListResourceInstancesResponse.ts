import { Resources } from './Resources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceInstancesResponse extends SdkResponse {
    public resources?: Array<Resources>;
    private 'total_count'?: number;
    public marker?: string;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resources>): ListResourceInstancesResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListResourceInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withMarker(marker: string): ListResourceInstancesResponse {
        this['marker'] = marker;
        return this;
    }
}