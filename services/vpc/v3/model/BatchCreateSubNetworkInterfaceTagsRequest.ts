import { BatchCreateSubNetworkInterfaceTagsRequestBody } from './BatchCreateSubNetworkInterfaceTagsRequestBody';


export class BatchCreateSubNetworkInterfaceTagsRequest {
    private 'sub_network_interface_id'?: string;
    public body?: BatchCreateSubNetworkInterfaceTagsRequestBody;
    public constructor(subNetworkInterfaceId?: string) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): BatchCreateSubNetworkInterfaceTagsRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string  | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId(): string | undefined {
        return this['sub_network_interface_id'];
    }
    public withBody(body: BatchCreateSubNetworkInterfaceTagsRequestBody): BatchCreateSubNetworkInterfaceTagsRequest {
        this['body'] = body;
        return this;
    }
}