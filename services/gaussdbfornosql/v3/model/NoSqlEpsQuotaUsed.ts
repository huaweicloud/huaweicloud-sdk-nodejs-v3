

export class NoSqlEpsQuotaUsed {
    public instance?: number;
    public vcpus?: number;
    public ram?: number;
    public constructor(instance?: number, vcpus?: number, ram?: number) { 
        this['instance'] = instance;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
    }
    public withInstance(instance: number): NoSqlEpsQuotaUsed {
        this['instance'] = instance;
        return this;
    }
    public withVcpus(vcpus: number): NoSqlEpsQuotaUsed {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): NoSqlEpsQuotaUsed {
        this['ram'] = ram;
        return this;
    }
}