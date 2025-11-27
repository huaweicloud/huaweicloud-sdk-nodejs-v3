
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): CreateApplicationResponse {
        this['data'] = data;
        return this;
    }
}