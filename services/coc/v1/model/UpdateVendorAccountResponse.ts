
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVendorAccountResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): UpdateVendorAccountResponse {
        this['data'] = data;
        return this;
    }
}