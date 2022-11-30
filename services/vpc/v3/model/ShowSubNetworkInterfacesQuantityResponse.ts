
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubNetworkInterfacesQuantityResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'sub_network_interfaces'?: number | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowSubNetworkInterfacesQuantityResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: number): ShowSubNetworkInterfacesQuantityResponse {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: number | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces() {
        return this['sub_network_interfaces'];
    }
}