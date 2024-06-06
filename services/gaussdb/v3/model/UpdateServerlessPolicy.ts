

export class UpdateServerlessPolicy {
    private 'min_vcpus'?: number;
    private 'max_vcpus'?: number;
    public constructor(minVcpus?: number, maxVcpus?: number) { 
        this['min_vcpus'] = minVcpus;
        this['max_vcpus'] = maxVcpus;
    }
    public withMinVcpus(minVcpus: number): UpdateServerlessPolicy {
        this['min_vcpus'] = minVcpus;
        return this;
    }
    public set minVcpus(minVcpus: number  | undefined) {
        this['min_vcpus'] = minVcpus;
    }
    public get minVcpus(): number | undefined {
        return this['min_vcpus'];
    }
    public withMaxVcpus(maxVcpus: number): UpdateServerlessPolicy {
        this['max_vcpus'] = maxVcpus;
        return this;
    }
    public set maxVcpus(maxVcpus: number  | undefined) {
        this['max_vcpus'] = maxVcpus;
    }
    public get maxVcpus(): number | undefined {
        return this['max_vcpus'];
    }
}