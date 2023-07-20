import { UpdateSubNetworkInterfaceRequestBody } from './UpdateSubNetworkInterfaceRequestBody';


export class UpdateSubNetworkInterfaceRequest {
    private 'sub_network_interface_id'?: string;
    public body?: UpdateSubNetworkInterfaceRequestBody;
    public constructor(subNetworkInterfaceId?: string) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): UpdateSubNetworkInterfaceRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string  | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId(): string | undefined {
        return this['sub_network_interface_id'];
    }
    public withBody(body: UpdateSubNetworkInterfaceRequestBody): UpdateSubNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}