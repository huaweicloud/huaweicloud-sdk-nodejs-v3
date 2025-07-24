import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';
import { PopUpInfo } from './PopUpInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserPopupInfoResponse extends SdkResponse {
    public status?: string;
    public result?: PopUpInfo;
    public error?: CommonResponseErrorOfAPITest;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListUserPopupInfoResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: PopUpInfo): ListUserPopupInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: CommonResponseErrorOfAPITest): ListUserPopupInfoResponse {
        this['error'] = error;
        return this;
    }
}