

export class ListFlavorInfo {
    public vcpu?: number;
    public mem?: number;
    public constructor(vcpu?: number, mem?: number) { 
        this['vcpu'] = vcpu;
        this['mem'] = mem;
    }
    public withVcpu(vcpu: number): ListFlavorInfo {
        this['vcpu'] = vcpu;
        return this;
    }
    public withMem(mem: number): ListFlavorInfo {
        this['mem'] = mem;
        return this;
    }
}