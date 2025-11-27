

export class CapacityOverviewResponseData {
    private 'sum_size'?: string;
    private 'sum_cpu'?: string;
    private 'sum_mem'?: string;
    public provider?: string;
    public type?: string;
    public constructor() { 
    }
    public withSumSize(sumSize: string): CapacityOverviewResponseData {
        this['sum_size'] = sumSize;
        return this;
    }
    public set sumSize(sumSize: string  | undefined) {
        this['sum_size'] = sumSize;
    }
    public get sumSize(): string | undefined {
        return this['sum_size'];
    }
    public withSumCpu(sumCpu: string): CapacityOverviewResponseData {
        this['sum_cpu'] = sumCpu;
        return this;
    }
    public set sumCpu(sumCpu: string  | undefined) {
        this['sum_cpu'] = sumCpu;
    }
    public get sumCpu(): string | undefined {
        return this['sum_cpu'];
    }
    public withSumMem(sumMem: string): CapacityOverviewResponseData {
        this['sum_mem'] = sumMem;
        return this;
    }
    public set sumMem(sumMem: string  | undefined) {
        this['sum_mem'] = sumMem;
    }
    public get sumMem(): string | undefined {
        return this['sum_mem'];
    }
    public withProvider(provider: string): CapacityOverviewResponseData {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): CapacityOverviewResponseData {
        this['type'] = type;
        return this;
    }
}