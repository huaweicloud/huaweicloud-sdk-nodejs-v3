
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateObjectConfigDescResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): UpdateObjectConfigDescResponse {
        this['data'] = data;
        return this;
    }
}