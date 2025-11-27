
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteVendorAccountResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): DeleteVendorAccountResponse {
        this['data'] = data;
        return this;
    }
}