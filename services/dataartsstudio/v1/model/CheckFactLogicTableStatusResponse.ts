
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckFactLogicTableStatusResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): CheckFactLogicTableStatusResponse {
        this['data'] = data;
        return this;
    }
}