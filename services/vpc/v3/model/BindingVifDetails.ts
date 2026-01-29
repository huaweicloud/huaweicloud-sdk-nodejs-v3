

export class BindingVifDetails {
    private 'primary_interface'?: boolean;
    private 'port_filter'?: boolean;
    private 'ovs_hybrid_plug'?: boolean;
    private 'vlan_id'?: number;
    private 'parent_id'?: string;
    private 'parent_device_id'?: string;
    public constructor() { 
    }
    public withPrimaryInterface(primaryInterface: boolean): BindingVifDetails {
        this['primary_interface'] = primaryInterface;
        return this;
    }
    public set primaryInterface(primaryInterface: boolean  | undefined) {
        this['primary_interface'] = primaryInterface;
    }
    public get primaryInterface(): boolean | undefined {
        return this['primary_interface'];
    }
    public withPortFilter(portFilter: boolean): BindingVifDetails {
        this['port_filter'] = portFilter;
        return this;
    }
    public set portFilter(portFilter: boolean  | undefined) {
        this['port_filter'] = portFilter;
    }
    public get portFilter(): boolean | undefined {
        return this['port_filter'];
    }
    public withOvsHybridPlug(ovsHybridPlug: boolean): BindingVifDetails {
        this['ovs_hybrid_plug'] = ovsHybridPlug;
        return this;
    }
    public set ovsHybridPlug(ovsHybridPlug: boolean  | undefined) {
        this['ovs_hybrid_plug'] = ovsHybridPlug;
    }
    public get ovsHybridPlug(): boolean | undefined {
        return this['ovs_hybrid_plug'];
    }
    public withVlanId(vlanId: number): BindingVifDetails {
        this['vlan_id'] = vlanId;
        return this;
    }
    public set vlanId(vlanId: number  | undefined) {
        this['vlan_id'] = vlanId;
    }
    public get vlanId(): number | undefined {
        return this['vlan_id'];
    }
    public withParentId(parentId: string): BindingVifDetails {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withParentDeviceId(parentDeviceId: string): BindingVifDetails {
        this['parent_device_id'] = parentDeviceId;
        return this;
    }
    public set parentDeviceId(parentDeviceId: string  | undefined) {
        this['parent_device_id'] = parentDeviceId;
    }
    public get parentDeviceId(): string | undefined {
        return this['parent_device_id'];
    }
}