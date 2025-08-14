
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetIdentityCenterServiceStatusResponse extends SdkResponse {
    public serviceStatus?: GetIdentityCenterServiceStatusResponseServiceStatusEnum | string;
    public serviceStatusReasons?: Array<string>;
    public constructor() { 
        super();
    }
    public withServiceStatus(serviceStatus: GetIdentityCenterServiceStatusResponseServiceStatusEnum | string): GetIdentityCenterServiceStatusResponse {
        this['serviceStatus'] = serviceStatus;
        return this;
    }
    public withServiceStatusReasons(serviceStatusReasons: Array<string>): GetIdentityCenterServiceStatusResponse {
        this['serviceStatusReasons'] = serviceStatusReasons;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetIdentityCenterServiceStatusResponseServiceStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
