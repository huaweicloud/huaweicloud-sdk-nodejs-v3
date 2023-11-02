
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InitializeStandardTemplateResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): InitializeStandardTemplateResponse {
        this['data'] = data;
        return this;
    }
}