
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCodeTableByIdResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ShowCodeTableByIdResponse {
        this['data'] = data;
        return this;
    }
}