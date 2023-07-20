

export class NoSqlEpsQuotaTotal {
    public instance?: number;
    public vcpus?: number;
    public ram?: number;
    public constructor(instance?: number, vcpus?: number, ram?: number) { 
        this['instance'] = instance;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
    }
    public withInstance(instance: number): NoSqlEpsQuotaTotal {
        this['instance'] = instance;
        return this;
    }
    public withVcpus(vcpus: number): NoSqlEpsQuotaTotal {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): NoSqlEpsQuotaTotal {
        this['ram'] = ram;
        return this;
    }
}