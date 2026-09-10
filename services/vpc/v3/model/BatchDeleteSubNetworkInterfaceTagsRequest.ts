import { BatchDeleteSubNetworkInterfaceTagsRequestBody } from './BatchDeleteSubNetworkInterfaceTagsRequestBody';


export class BatchDeleteSubNetworkInterfaceTagsRequest {
    private 'sub_network_interface_id'?: string;
    public body?: BatchDeleteSubNetworkInterfaceTagsRequestBody;
    public constructor(subNetworkInterfaceId?: string) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): BatchDeleteSubNetworkInterfaceTagsRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string  | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId(): string | undefined {
        return this['sub_network_interface_id'];
    }
    public withBody(body: BatchDeleteSubNetworkInterfaceTagsRequestBody): BatchDeleteSubNetworkInterfaceTagsRequest {
        this['body'] = body;
        return this;
    }
}