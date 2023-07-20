

export class TargetServerById {
    private 'vm_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withVmId(vmId: string): TargetServerById {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
    public withName(name: string): TargetServerById {
        this['name'] = name;
        return this;
    }
}