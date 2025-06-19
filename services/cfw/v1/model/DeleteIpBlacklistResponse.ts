
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpBlacklistResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): DeleteIpBlacklistResponse {
        this['data'] = data;
        return this;
    }
}