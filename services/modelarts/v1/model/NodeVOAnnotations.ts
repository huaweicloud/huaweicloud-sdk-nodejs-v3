

export class NodeVOAnnotations {
    private 'os.modelarts/npu-topology-placement'?: string;
    public constructor() { 
    }
    public withOsModelartsNpuTopologyPlacement(osModelartsNpuTopologyPlacement: string): NodeVOAnnotations {
        this['os.modelarts/npu-topology-placement'] = osModelartsNpuTopologyPlacement;
        return this;
    }
    public set osModelartsNpuTopologyPlacement(osModelartsNpuTopologyPlacement: string  | undefined) {
        this['os.modelarts/npu-topology-placement'] = osModelartsNpuTopologyPlacement;
    }
    public get osModelartsNpuTopologyPlacement(): string | undefined {
        return this['os.modelarts/npu-topology-placement'];
    }
}