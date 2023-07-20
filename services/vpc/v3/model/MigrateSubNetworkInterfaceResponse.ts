import { SubNetworkInterface } from './SubNetworkInterface';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateSubNetworkInterfaceResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'sub_network_interfaces'?: Array<SubNetworkInterface>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): MigrateSubNetworkInterfaceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: Array<SubNetworkInterface>): MigrateSubNetworkInterfaceResponse {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: Array<SubNetworkInterface>  | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces(): Array<SubNetworkInterface> | undefined {
        return this['sub_network_interfaces'];
    }
}