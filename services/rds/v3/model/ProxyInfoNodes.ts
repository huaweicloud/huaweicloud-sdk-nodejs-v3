

export class ProxyInfoNodes {
    public id?: string;
    public status?: string;
    public role?: string;
    private 'az_code'?: string;
    private 'frozen_flag'?: number;
    public constructor() { 
    }
    public withId(id: string): ProxyInfoNodes {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ProxyInfoNodes {
        this['status'] = status;
        return this;
    }
    public withRole(role: string): ProxyInfoNodes {
        this['role'] = role;
        return this;
    }
    public withAzCode(azCode: string): ProxyInfoNodes {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withFrozenFlag(frozenFlag: number): ProxyInfoNodes {
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