

export class CreateValueListRequestBody {
    public name?: string;
    public type?: CreateValueListRequestBodyTypeEnum | string;
    public values?: Array<string>;
    public description?: string;
    public constructor(name?: string, type?: string, values?: Array<string>) { 
        this['name'] = name;
        this['type'] = type;
        this['values'] = values;
    }
    public withName(name: string): CreateValueListRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateValueListRequestBodyTypeEnum | string): CreateValueListRequestBody {
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
