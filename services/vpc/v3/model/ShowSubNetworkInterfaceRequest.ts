

export class ShowSubNetworkInterfaceRequest {
    private 'sub_network_interface_id': string | undefined;
    public constructor(subNetworkInterfaceId?: any) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): ShowSubNetworkInterfaceRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId() {
        return this['sub_network_interface_id'];
    }
}