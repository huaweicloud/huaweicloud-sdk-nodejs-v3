

export class DeleteSubNetworkInterfaceTagRequest {
    private 'sub_network_interface_id'?: string;
    private 'tag_key'?: string;
    public constructor(subNetworkInterfaceId?: string, tagKey?: string) { 
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        this['tag_key'] = tagKey;
    }
    public withSubNetworkInterfaceId(subNetworkInterfaceId: string): DeleteSubNetworkInterfaceTagRequest {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
        return this;
    }
    public set subNetworkInterfaceId(subNetworkInterfaceId: string  | undefined) {
        this['sub_network_interface_id'] = subNetworkInterfaceId;
    }
    public get subNetworkInterfaceId(): string | undefined {
        return this['sub_network_interface_id'];
    }
    public withTagKey(tagKey: string): DeleteSubNetworkInterfaceTagRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
}