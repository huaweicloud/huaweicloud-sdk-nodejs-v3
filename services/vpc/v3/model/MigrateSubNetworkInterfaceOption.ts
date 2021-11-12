

export class MigrateSubNetworkInterfaceOption {
    private 'parent_id': string | undefined;
    private 'sub_network_interfaces': Array<{ [key: string]: string; }> | undefined;
    public constructor(parentId?: any, subNetworkInterfaces?: any) { 
        this['parent_id'] = parentId;
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public withParentId(parentId: string): MigrateSubNetworkInterfaceOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: Array<{ [key: string]: string; }>): MigrateSubNetworkInterfaceOption {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: Array<{ [key: string]: string; }> | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces() {
        return this['sub_network_interfaces'];
    }
}