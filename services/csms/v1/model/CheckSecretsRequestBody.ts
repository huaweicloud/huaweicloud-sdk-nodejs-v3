

export class CheckSecretsRequestBody {
    public type?: string;
    public data?: object;
    public constructor(type?: string, data?: object) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): CheckSecretsRequestBody {
        this['type'] = type;
        return this;
    }
    public withData(data: object): CheckSecretsRequestBody {
        this['data'] = data;
        return this;
    }
}