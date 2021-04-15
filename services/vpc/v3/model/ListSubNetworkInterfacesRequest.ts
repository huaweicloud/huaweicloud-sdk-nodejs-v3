

export class ListSubNetworkInterfacesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'virsubnet_id'?: Array<string> | undefined;
    private 'private_ip_address'?: Array<string> | undefined;
    private 'mac_address'?: Array<string> | undefined;
    private 'vpc_id'?: Array<string> | undefined;
    public description?: Array<string>;
    private 'parent_id'?: Array<string> | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListSubNetworkInterfacesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSubNetworkInterfacesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListSubNetworkInterfacesRequest {
        this['id'] = id;
        return this;
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListSubNetworkInterfacesRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string> | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId() {
        return this['virsubnet_id'];
    }
    public withPrivateIpAddress(privateIpAddress: Array<string>): ListSubNetworkInterfacesRequest {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: Array<string> | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress() {
        return this['private_ip_address'];
    }
    public withMacAddress(macAddress: Array<string>): ListSubNetworkInterfacesRequest {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: Array<string> | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress() {
        return this['mac_address'];
    }
    public withVpcId(vpcId: Array<string>): ListSubNetworkInterfacesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string> | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withDescription(description: Array<string>): ListSubNetworkInterfacesRequest {
        this['description'] = description;
        return this;
    }
    public withParentId(parentId: Array<string>): ListSubNetworkInterfacesRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: Array<string> | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
}