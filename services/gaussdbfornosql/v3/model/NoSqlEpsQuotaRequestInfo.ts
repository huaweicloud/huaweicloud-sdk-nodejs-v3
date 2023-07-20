

export class NoSqlEpsQuotaRequestInfo {
    public instance?: number;
    public vcpus?: number;
    public ram?: number;
    public constructor() { 
    }
    public withInstance(instance: number): NoSqlEpsQuotaRequestInfo {
        this['instance'] = instance;
        return this;
    }
    public withVcpus(vcpus: number): NoSqlEpsQuotaRequestInfo {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): NoSqlEpsQuotaRequestInfo {
        this['ram'] = ram;
        return this;
    }
}