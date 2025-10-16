import { TmsResourceInstance } from './TmsResourceInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmTmsResourceInstancesResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<TmsResourceInstance>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ConfirmTmsResourceInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<TmsResourceInstance>): ConfirmTmsResourceInstancesResponse {
        this['resources'] = resources;
        return this;
    }
}