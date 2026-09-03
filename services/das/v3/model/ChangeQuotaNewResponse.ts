import { DasCommonInstanceDto } from './DasCommonInstanceDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeQuotaNewResponse extends SdkResponse {
    public instances?: Array<DasCommonInstanceDto>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<DasCommonInstanceDto>): ChangeQuotaNewResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ChangeQuotaNewResponse {
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