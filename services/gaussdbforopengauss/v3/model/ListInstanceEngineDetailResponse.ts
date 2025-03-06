import { InstanceEngineDetail } from './InstanceEngineDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceEngineDetailResponse extends SdkResponse {
    private 'engine_instance_details'?: Array<InstanceEngineDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEngineInstanceDetails(engineInstanceDetails: Array<InstanceEngineDetail>): ListInstanceEngineDetailResponse {
        this['engine_instance_details'] = engineInstanceDetails;
        return this;
    }
    public set engineInstanceDetails(engineInstanceDetails: Array<InstanceEngineDetail>  | undefined) {
        this['engine_instance_details'] = engineInstanceDetails;
    }
    public get engineInstanceDetails(): Array<InstanceEngineDetail> | undefined {
        return this['engine_instance_details'];
    }
    public withTotalCount(totalCount: number): ListInstanceEngineDetailResponse {
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