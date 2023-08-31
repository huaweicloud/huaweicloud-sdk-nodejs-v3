import { EnvironmentDetail } from './EnvironmentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnvironmentDetailResponse extends SdkResponse {
    public status?: string;
    public result?: EnvironmentDetail;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowEnvironmentDetailResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: EnvironmentDetail): ShowEnvironmentDetailResponse {
        this['result'] = result;
        return this;
    }
}