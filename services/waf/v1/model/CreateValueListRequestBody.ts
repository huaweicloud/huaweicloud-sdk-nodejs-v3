

export class CreateValueListRequestBody {
    public name: string;
    public type: CreateValueListRequestBodyTypeEnum;
    public values: Array<string>;
    public description?: string;
    public constructor(name?: any, type?: any, values?: any) { 
        this['name'] = name;
        this['type'] = type;
        this['values'] = values;
    }
    public withName(name: string): CreateValueListRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateValueListRequestBodyTypeEnum): CreateValueListRequestBody {
        this['type'] = type;
        return this;
    }
    public withValues(values: Array<string>): CreateValueListRequestBody {
        this['values'] = values;
        return this;
    }
    public withDescription(description: string): CreateValueListRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateValueListRequestBodyTypeEnum {
    URL = 'url',
    PARAMS = 'params',
    IP = 'ip',
    COOKIE = 'cookie',
    REFERER = 'referer',
    USER_AGENT = 'user-agent',
    HEADER = 'header',
    RESPONSE_CODE = 'response_code',
    RESPONSE_HEADER = 'response_header',
    RESPONSE_BODY = 'response_body'
}
