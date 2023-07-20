

export class UpdateValueListRequestBody {
    public name?: string;
    public type?: UpdateValueListRequestBodyTypeEnum | string;
    public values?: Array<string>;
    public description?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): UpdateValueListRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: UpdateValueListRequestBodyTypeEnum | string): UpdateValueListRequestBody {
        this['type'] = type;
        return this;
    }
    public withValues(values: Array<string>): UpdateValueListRequestBody {
        this['values'] = values;
        return this;
    }
    public withDescription(description: string): UpdateValueListRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateValueListRequestBodyTypeEnum {
    URL = 'url',
    PARAMS = 'params',
    IP = 'ip',
    COOKIE = 'cookie',
    REFERER = 'referer',
    USER_AGENT = 'user-agent',
    HEADER = 'header',
    RESPONSE_CODE = 'response_code',
    RESPONSE_HEADER = 'response_header',
    RESOPNSE_BODY = 'resopnse_body'
}
