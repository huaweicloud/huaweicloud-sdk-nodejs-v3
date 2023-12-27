
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClientNetworkResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'client_network_ranges'?: Array<string>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowClientNetworkResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withClientNetworkRanges(clientNetworkRanges: Array<string>): ShowClientNetworkResponse {
        this['client_network_ranges'] = clientNetworkRanges;
        return this;
    }
    public set clientNetworkRanges(clientNetworkRanges: Array<string>  | undefined) {
        this['client_network_ranges'] = clientNetworkRanges;
    }
    public get clientNetworkRanges(): Array<string> | undefined {
        return this['client_network_ranges'];
    }
}