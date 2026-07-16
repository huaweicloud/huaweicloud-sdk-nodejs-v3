

export class CreateApiKeyReq {
    public name?: string;
    public description?: string;
    public scope?: CreateApiKeyReqScopeEnum | string;
    public constructor(name?: string, scope?: string) { 
        this['name'] = name;
        this['scope'] = scope;
    }
    public withName(name: string): CreateApiKeyReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateApiKeyReq {
        this['description'] = description;
        return this;
    }
    public withScope(scope: CreateApiKeyReqScopeEnum | string): CreateApiKeyReq {
        this['scope'] = scope;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateApiKeyReqScopeEnum {
    USER = 'USER',
    SERVICE = 'SERVICE'
}
