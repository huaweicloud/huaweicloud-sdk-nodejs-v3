import { TmsResource } from './TmsResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGcbResourceByTagResponse extends SdkResponse {
    public resources?: Array<TmsResource>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<TmsResource>): ListGcbResourceByTagResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListGcbResourceByTagResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}