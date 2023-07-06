

export class AzInfoResp {
    public code?: string;
    public name?: string;
    public status?: string;
    public constructor() { 
    }
    public withCode(code: string): AzInfoResp {
        this['code'] = code;
        return this;
    }
    public withName(name: string): AzInfoResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): AzInfoResp {
        this['status'] = status;
        return this;
    }
}