

export class ShowStatusInstanceItemInstanceList {
    private 'instance_name'?: string;
    public value?: number;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): ShowStatusInstanceItemInstanceList {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withValue(value: number): ShowStatusInstanceItemInstanceList {
        this['value'] = value;
        return this;
    }
}