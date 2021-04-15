import { UpdateSubNetworkInterfaceRequestBody } from './UpdateSubNetworkInterfaceRequestBody';


export class UpdateSubNetworkInterfaceRequest {
    private 'sub_network_interface_id': string | undefined;
    public body?: UpdateSubNetworkInterfaceRequestBody;
    public constructor(subNetworkInterfaceId?: any) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): UpdateSubNetworkInterfaceRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId() {
        return this['sub_network_interface_id'];
    }
    public withBody(body: UpdateSubNetworkInterfaceRequestBody): UpdateSubNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}