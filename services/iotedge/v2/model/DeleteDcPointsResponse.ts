import { DeleteDcPointsFailedDetail } from './DeleteDcPointsFailedDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDcPointsResponse extends SdkResponse {
    public success?: Array<string>;
    public failure?: Array<DeleteDcPointsFailedDetail>;
    public constructor() { 
        super();
    }
    public withSuccess(success: Array<string>): DeleteDcPointsResponse {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: Array<DeleteDcPointsFailedDetail>): DeleteDcPointsResponse {
        this['failure'] = failure;
        return this;
    }
}