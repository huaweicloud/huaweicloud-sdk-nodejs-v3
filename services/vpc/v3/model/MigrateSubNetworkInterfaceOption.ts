

export class MigrateSubNetworkInterfaceOption {
    private 'parent_id'?: string;
    private 'sub_network_interfaces'?: Array<{ [key: string]: string; }>;
    public constructor(parentId?: string, subNetworkInterfaces?: Array<{ [key: string]: string; }>) { 
        this['parent_id'] = parentId;
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public withParentId(parentId: string): MigrateSubNetworkInterfaceOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: Array<{ [key: string]: string; }>): MigrateSubNetworkInterfaceOption {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: Array<{ [key: string]: string; }>  | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces(): Array<{ [key: string]: string; }> | undefined {
        return this['sub_network_interfaces'];
    }
}