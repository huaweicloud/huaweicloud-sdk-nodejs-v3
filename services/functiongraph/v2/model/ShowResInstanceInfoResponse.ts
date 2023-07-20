import { ListEnterpriseResourceResult } from './ListEnterpriseResourceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResInstanceInfoResponse extends SdkResponse {
    public resources?: Array<ListEnterpriseResourceResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ListEnterpriseResourceResult>): ShowResInstanceInfoResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ShowResInstanceInfoResponse {
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