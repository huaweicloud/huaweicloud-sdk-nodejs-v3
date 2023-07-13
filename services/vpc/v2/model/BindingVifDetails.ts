

export class BindingVifDetails {
    private 'primary_interface'?: boolean | undefined;
    private 'port_filter'?: boolean | undefined;
    private 'ovs_hybrid_plug'?: boolean | undefined;
    public constructor() { 
    }
    public withPrimaryInterface(primaryInterface: boolean): BindingVifDetails {
        this['primary_interface'] = primaryInterface;
        return this;
    }
    public set primaryInterface(primaryInterface: boolean | undefined) {
        this['primary_interface'] = primaryInterface;
    }
    public get primaryInterface() {
        return this['primary_interface'];
    }
    public withPortFilter(portFilter: boolean): BindingVifDetails {
        this['port_filter'] = portFilter;
        return this;
    }
    public set portFilter(portFilter: boolean | undefined) {
        this['port_filter'] = portFilter;
    }
    public get portFilter() {
        return this['port_filter'];
    }
    public withOvsHybridPlug(ovsHybridPlug: boolean): BindingVifDetails {
        this['ovs_hybrid_plug'] = ovsHybridPlug;
        return this;
    }
    public set ovsHybridPlug(ovsHybridPlug: boolean | undefined) {
        this['ovs_hybrid_plug'] = ovsHybridPlug;
    }
    public get ovsHybridPlug() {
        return this['ovs_hybrid_plug'];
    }
}