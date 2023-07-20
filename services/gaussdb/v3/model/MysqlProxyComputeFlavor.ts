

export class MysqlProxyComputeFlavor {
    public vcpus?: string;
    public ram?: string;
    private 'db_type'?: string;
    public id?: string;
    private 'spec_code'?: string;
    private 'az_status'?: object;
    public constructor(vcpus?: string, ram?: string, dbType?: string, id?: string, specCode?: string, azStatus?: object) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['db_type'] = dbType;
        this['id'] = id;
        this['spec_code'] = specCode;
        this['az_status'] = azStatus;
    }
    public withVcpus(vcpus: string): MysqlProxyComputeFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): MysqlProxyComputeFlavor {
        this['ram'] = ram;
        return this;
    }
    public withDbType(dbType: string): MysqlProxyComputeFlavor {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withId(id: string): MysqlProxyComputeFlavor {
        this['id'] = id;
        return this;
    }
    public withSpecCode(specCode: string): MysqlProxyComputeFlavor {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAzStatus(azStatus: object): MysqlProxyComputeFlavor {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: object  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): object | undefined {
        return this['az_status'];
    }
}