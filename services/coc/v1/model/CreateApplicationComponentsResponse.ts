
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationComponentsResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): CreateApplicationComponentsResponse {
        this['data'] = data;
        return this;
    }
}