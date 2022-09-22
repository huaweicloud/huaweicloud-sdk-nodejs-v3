

export class CloneServerBrief {
    private 'vm_id'?: string | undefined;
    public name?: string;
    public constructor() { 
    }
    public withVmId(vmId: string): CloneServerBrief {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId() {
        return this['vm_id'];
    }
    public withName(name: string): CloneServerBrief {
        this['name'] = name;
        return this;
    }
}