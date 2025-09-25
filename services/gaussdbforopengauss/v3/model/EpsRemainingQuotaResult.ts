

export class EpsRemainingQuotaResult {
    private 'eps_tag'?: string;
    private 'instance_eps_quota'?: number;
    private 'cpu_eps_quota'?: number;
    private 'mem_eps_quota'?: number;
    private 'volume_eps_quota'?: number;
    private 'instance_eps_remaining_quota'?: number;
    private 'cpu_eps_remaining_quota'?: number;
    private 'mem_eps_remaining_quota'?: number;
    private 'volume_eps_remaining_quota'?: number;
    public constructor() { 
    }
    public withEpsTag(epsTag: string): EpsRemainingQuotaResult {
        this['eps_tag'] = epsTag;
        return this;
    }
    public set epsTag(epsTag: string  | undefined) {
        this['eps_tag'] = epsTag;
    }
    public get epsTag(): string | undefined {
        return this['eps_tag'];
    }
    public withInstanceEpsQuota(instanceEpsQuota: number): EpsRemainingQuotaResult {
        this['instance_eps_quota'] = instanceEpsQuota;
        return this;
    }
    public set instanceEpsQuota(instanceEpsQuota: number  | undefined) {
        this['instance_eps_quota'] = instanceEpsQuota;
    }
    public get instanceEpsQuota(): number | undefined {
        return this['instance_eps_quota'];
    }
    public withCpuEpsQuota(cpuEpsQuota: number): EpsRemainingQuotaResult {
        this['cpu_eps_quota'] = cpuEpsQuota;
        return this;
    }
    public set cpuEpsQuota(cpuEpsQuota: number  | undefined) {
        this['cpu_eps_quota'] = cpuEpsQuota;
    }
    public get cpuEpsQuota(): number | undefined {
        return this['cpu_eps_quota'];
    }
    public withMemEpsQuota(memEpsQuota: number): EpsRemainingQuotaResult {
        this['mem_eps_quota'] = memEpsQuota;
        return this;
    }
    public set memEpsQuota(memEpsQuota: number  | undefined) {
        this['mem_eps_quota'] = memEpsQuota;
    }
    public get memEpsQuota(): number | undefined {
        return this['mem_eps_quota'];
    }
    public withVolumeEpsQuota(volumeEpsQuota: number): EpsRemainingQuotaResult {
        this['volume_eps_quota'] = volumeEpsQuota;
        return this;
    }
    public set volumeEpsQuota(volumeEpsQuota: number  | undefined) {
        this['volume_eps_quota'] = volumeEpsQuota;
    }
    public get volumeEpsQuota(): number | undefined {
        return this['volume_eps_quota'];
    }
    public withInstanceEpsRemainingQuota(instanceEpsRemainingQuota: number): EpsRemainingQuotaResult {
        this['instance_eps_remaining_quota'] = instanceEpsRemainingQuota;
        return this;
    }
    public set instanceEpsRemainingQuota(instanceEpsRemainingQuota: number  | undefined) {
        this['instance_eps_remaining_quota'] = instanceEpsRemainingQuota;
    }
    public get instanceEpsRemainingQuota(): number | undefined {
        return this['instance_eps_remaining_quota'];
    }
    public withCpuEpsRemainingQuota(cpuEpsRemainingQuota: number): EpsRemainingQuotaResult {
        this['cpu_eps_remaining_quota'] = cpuEpsRemainingQuota;
        return this;
    }
    public set cpuEpsRemainingQuota(cpuEpsRemainingQuota: number  | undefined) {
        this['cpu_eps_remaining_quota'] = cpuEpsRemainingQuota;
    }
    public get cpuEpsRemainingQuota(): number | undefined {
        return this['cpu_eps_remaining_quota'];
    }
    public withMemEpsRemainingQuota(memEpsRemainingQuota: number): EpsRemainingQuotaResult {
        this['mem_eps_remaining_quota'] = memEpsRemainingQuota;
        return this;
    }
    public set memEpsRemainingQuota(memEpsRemainingQuota: number  | undefined) {
        this['mem_eps_remaining_quota'] = memEpsRemainingQuota;
    }
    public get memEpsRemainingQuota(): number | undefined {
        return this['mem_eps_remaining_quota'];
    }
    public withVolumeEpsRemainingQuota(volumeEpsRemainingQuota: number): EpsRemainingQuotaResult {
        this['volume_eps_remaining_quota'] = volumeEpsRemainingQuota;
        return this;
    }
    public set volumeEpsRemainingQuota(volumeEpsRemainingQuota: number  | undefined) {
        this['volume_eps_remaining_quota'] = volumeEpsRemainingQuota;
    }
    public get volumeEpsRemainingQuota(): number | undefined {
        return this['volume_eps_remaining_quota'];
    }
}