import { SubNetworkInterface } from './SubNetworkInterface';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateSubNetworkInterfaceResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'sub_network_interfaces'?: Array<SubNetworkInterface> | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchCreateSubNetworkInterfaceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: Array<SubNetworkInterface>): BatchCreateSubNetworkInterfaceResponse {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: Array<SubNetworkInterface> | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces() {
        return this['sub_network_interfaces'];
    }
}