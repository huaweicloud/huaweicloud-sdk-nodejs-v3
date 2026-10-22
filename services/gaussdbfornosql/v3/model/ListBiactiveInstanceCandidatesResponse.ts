import { BiactiveInstanceV3 } from './BiactiveInstanceV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBiactiveInstanceCandidatesResponse extends SdkResponse {
    private 'total_count'?: number;
    public instances?: Array<BiactiveInstanceV3>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListBiactiveInstanceCandidatesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstances(instances: Array<BiactiveInstanceV3>): ListBiactiveInstanceCandidatesResponse {
        this['instances'] = instances;
        return this;
    }
}