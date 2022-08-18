import { ServerResource } from './ServerResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersByTagResponse extends SdkResponse {
    public resources?: Array<ServerResource>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ServerResource>): ListServersByTagResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListServersByTagResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}