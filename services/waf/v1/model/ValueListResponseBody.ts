

export class ValueListResponseBody {
    public id?: string;
    public name?: string;
    public type?: ValueListResponseBodyTypeEnum | string;
    public timestamp?: number;
    public values?: Array<string>;
    public producer?: number;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ValueListResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ValueListResponseBody {
        this['name'] = name;
        return this;
    }
    public withType(type: ValueListResponseBodyTypeEnum | string): ValueListResponseBody {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): ValueListResponseBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withValues(values: Array<string>): ValueListResponseBody {
        this['values'] = values;
        return this;
    }
    public withProducer(producer: number): ValueListResponseBody {
        this['producer'] = producer;
        return this;
    }
    public withDescription(description: string): ValueListResponseBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValueListResponseBodyTypeEnum {
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
