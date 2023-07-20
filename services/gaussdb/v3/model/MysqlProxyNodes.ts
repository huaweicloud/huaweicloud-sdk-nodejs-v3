

export class MysqlProxyNodes {
    public id?: string;
    public status?: string;
    public name?: string;
    public role?: string;
    private 'az_code'?: string;
    private 'frozen_flag'?: number;
    public constructor() { 
    }
    public withId(id: string): MysqlProxyNodes {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): MysqlProxyNodes {
        this['status'] = status;
        return this;
    }
    public withName(name: string): MysqlProxyNodes {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): MysqlProxyNodes {
        this['role'] = role;
        return this;
    }
    public withAzCode(azCode: string): MysqlProxyNodes {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withFrozenFlag(frozenFlag: number): MysqlProxyNodes {
        this['frozen_flag'] = frozenFlag;
        return this;
    }
    public set frozenFlag(frozenFlag: number  | undefined) {
        this['frozen_flag'] = frozenFlag;
    }
    public get frozenFlag(): number | undefined {
        return this['frozen_flag'];
    }
}