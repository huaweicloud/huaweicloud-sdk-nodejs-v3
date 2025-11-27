
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStatisticsResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): UpdateStatisticsResponse {
        this['resp'] = resp;
        return this;
    }
}