
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTrustedIpAddressResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteTrustedIpAddressResponse {
        this['status'] = status;
        return this;
    }
}