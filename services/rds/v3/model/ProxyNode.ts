

export class ProxyNode {
    public id?: string;
    public name?: string;
    public role?: string;
    private 'az_code'?: string;
    public status?: string;
    private 'frozen_flag'?: number;
    public constructor(id?: string, name?: string, role?: string, azCode?: string, status?: string, frozenFlag?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['role'] = role;
        this['az_code'] = azCode;
        this['status'] = status;
        this['frozen_flag'] = frozenFlag;
    }
    public withId(id: string): ProxyNode {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProxyNode {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): ProxyNode {
        this['role'] = role;
        return this;
    }
    public withAzCode(azCode: string): ProxyNode {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withStatus(status: string): ProxyNode {
        this['status'] = status;
        return this;
    }
    public withFrozenFlag(frozenFlag: number): ProxyNode {
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