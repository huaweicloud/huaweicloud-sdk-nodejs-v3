

export class InstanceFlavor {
    private 'instance_type'?: string;
    public type?: string;
    public status?: string;
    private 'charge_modes'?: Array<string>;
    public constructor(instanceType?: string, type?: string, status?: string, chargeModes?: Array<string>) { 
        this['instance_type'] = instanceType;
        this['type'] = type;
        this['status'] = status;
        this['charge_modes'] = chargeModes;
    }
    public withInstanceType(instanceType: string): InstanceFlavor {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withType(type: string): InstanceFlavor {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): InstanceFlavor {
        this['status'] = status;
        return this;
    }
    public withChargeModes(chargeModes: Array<string>): InstanceFlavor {
        this['charge_modes'] = chargeModes;
        return this;
    }
    public set chargeModes(chargeModes: Array<string>  | undefined) {
        this['charge_modes'] = chargeModes;
    }
    public get chargeModes(): Array<string> | undefined {
        return this['charge_modes'];
    }
}