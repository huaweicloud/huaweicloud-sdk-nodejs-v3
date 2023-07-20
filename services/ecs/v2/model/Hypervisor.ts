

export class Hypervisor {
    private 'hypervisor_type'?: string;
    private 'csd_hypervisor'?: string;
    public constructor() { 
    }
    public withHypervisorType(hypervisorType: string): Hypervisor {
        this['hypervisor_type'] = hypervisorType;
        return this;
    }
    public set hypervisorType(hypervisorType: string  | undefined) {
        this['hypervisor_type'] = hypervisorType;
    }
    public get hypervisorType(): string | undefined {
        return this['hypervisor_type'];
    }
    public withCsdHypervisor(csdHypervisor: string): Hypervisor {
        this['csd_hypervisor'] = csdHypervisor;
        return this;
    }
    public set csdHypervisor(csdHypervisor: string  | undefined) {
        this['csd_hypervisor'] = csdHypervisor;
    }
    public get csdHypervisor(): string | undefined {
        return this['csd_hypervisor'];
    }
}