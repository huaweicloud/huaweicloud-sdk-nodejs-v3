
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableIpResponse extends SdkResponse {
    private 'available_ip'?: number;
    public constructor() { 
        super();
    }
    public withAvailableIp(availableIp: number): ShowAvailableIpResponse {
        this['available_ip'] = availableIp;
        return this;
    }
    public set availableIp(availableIp: number  | undefined) {
        this['available_ip'] = availableIp;
    }
    public get availableIp(): number | undefined {
        return this['available_ip'];
    }
}