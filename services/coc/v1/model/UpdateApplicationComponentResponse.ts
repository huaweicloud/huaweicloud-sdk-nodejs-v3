
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateApplicationComponentResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): UpdateApplicationComponentResponse {
        this['data'] = data;
        return this;
    }
}