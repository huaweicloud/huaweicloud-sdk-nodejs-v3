

export class MysqlProxyFlavorsResponseComputeFlavors {
    public id?: string;
    public code?: string;
    public cpu?: string;
    public mem?: string;
    private 'db_type'?: string;
    private 'az_status'?: object;
    public constructor() { 
    }
    public withId(id: string): MysqlProxyFlavorsResponseComputeFlavors {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): MysqlProxyFlavorsResponseComputeFlavors {
        this['code'] = code;
        return this;
    }
    public withCpu(cpu: string): MysqlProxyFlavorsResponseComputeFlavors {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): MysqlProxyFlavorsResponseComputeFlavors {
        this['mem'] = mem;
        return this;
    }
    public withDbType(dbType: string): MysqlProxyFlavorsResponseComputeFlavors {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withAzStatus(azStatus: object): MysqlProxyFlavorsResponseComputeFlavors {
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