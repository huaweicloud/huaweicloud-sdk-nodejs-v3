

export class DedicatedComputeInfo {
    private 'vcpus_total'?: number;
    private 'vcpus_used'?: number;
    private 'ram_total'?: number;
    private 'ram_used'?: number;
    private 'spec_code'?: string;
    private 'host_num'?: number;
    public constructor(vcpusTotal?: number, vcpusUsed?: number, ramTotal?: number, ramUsed?: number, specCode?: string, hostNum?: number) { 
        this['vcpus_total'] = vcpusTotal;
        this['vcpus_used'] = vcpusUsed;
        this['ram_total'] = ramTotal;
        this['ram_used'] = ramUsed;
        this['spec_code'] = specCode;
        this['host_num'] = hostNum;
    }
    public withVcpusTotal(vcpusTotal: number): DedicatedComputeInfo {
        this['vcpus_total'] = vcpusTotal;
        return this;
    }
    public set vcpusTotal(vcpusTotal: number  | undefined) {
        this['vcpus_total'] = vcpusTotal;
    }
    public get vcpusTotal(): number | undefined {
        return this['vcpus_total'];
    }
    public withVcpusUsed(vcpusUsed: number): DedicatedComputeInfo {
        this['vcpus_used'] = vcpusUsed;
        return this;
    }
    public set vcpusUsed(vcpusUsed: number  | undefined) {
        this['vcpus_used'] = vcpusUsed;
    }
    public get vcpusUsed(): number | undefined {
        return this['vcpus_used'];
    }
    public withRamTotal(ramTotal: number): DedicatedComputeInfo {
        this['ram_total'] = ramTotal;
        return this;
    }
    public set ramTotal(ramTotal: number  | undefined) {
        this['ram_total'] = ramTotal;
    }
    public get ramTotal(): number | undefined {
        return this['ram_total'];
    }
    public withRamUsed(ramUsed: number): DedicatedComputeInfo {
        this['ram_used'] = ramUsed;
        return this;
    }
    public set ramUsed(ramUsed: number  | undefined) {
        this['ram_used'] = ramUsed;
    }
    public get ramUsed(): number | undefined {
        return this['ram_used'];
    }
    public withSpecCode(specCode: string): DedicatedComputeInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withHostNum(hostNum: number): DedicatedComputeInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}