

export class MysqlFlavorInfo {
    public vcpus?: string;
    public ram?: string;
    public constructor(vcpus?: string, ram?: string) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
    }
    public withVcpus(vcpus: string): MysqlFlavorInfo {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): MysqlFlavorInfo {
        this['ram'] = ram;
        return this;
    }
}