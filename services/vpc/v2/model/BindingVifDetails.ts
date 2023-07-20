

export class BindingVifDetails {
    private 'primary_interface'?: boolean;
    private 'port_filter'?: boolean;
    private 'ovs_hybrid_plug'?: boolean;
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
}