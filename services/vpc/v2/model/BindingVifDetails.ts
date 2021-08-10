

export class BindingVifDetails {
    private 'primary_interface'?: boolean | undefined;
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
}