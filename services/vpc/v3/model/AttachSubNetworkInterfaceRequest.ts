import { AttachSubNetworkInterfaceRequestBody } from './AttachSubNetworkInterfaceRequestBody';


export class AttachSubNetworkInterfaceRequest {
    private 'sub_network_interface_id'?: string;
    public body?: AttachSubNetworkInterfaceRequestBody;
    public constructor(subNetworkInterfaceId?: string) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): AttachSubNetworkInterfaceRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string  | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId(): string | undefined {
        return this['sub_network_interface_id'];
    }
    public withBody(body: AttachSubNetworkInterfaceRequestBody): AttachSubNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}