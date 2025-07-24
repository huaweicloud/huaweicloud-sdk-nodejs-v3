import { ResultValueStringForOk } from './ResultValueStringForOk';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserAccessInfoResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueStringForOk;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowUserAccessInfoResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueStringForOk): ShowUserAccessInfoResponse {
        this['result'] = result;
        return this;
    }
}