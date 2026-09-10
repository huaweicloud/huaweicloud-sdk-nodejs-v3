import { CreateSubNetworkInterfaceTagRequestBody } from './CreateSubNetworkInterfaceTagRequestBody';


export class CreateSubNetworkInterfaceTagRequest {
    private 'sub_network_interface_id'?: string;
    public body?: CreateSubNetworkInterfaceTagRequestBody;
    public constructor(subNetworkInterfaceId?: string) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): CreateSubNetworkInterfaceTagRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string  | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId(): string | undefined {
        return this['sub_network_interface_id'];
    }
    public withBody(body: CreateSubNetworkInterfaceTagRequestBody): CreateSubNetworkInterfaceTagRequest {
        this['body'] = body;
        return this;
    }
}