
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateValueListResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: CreateValueListResponseTypeEnum | string;
    public description?: string;
    public timestamp?: number;
    public values?: Array<string>;
    public producer?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateValueListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateValueListResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateValueListResponseTypeEnum | string): CreateValueListResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): CreateValueListResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): CreateValueListResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withValues(values: Array<string>): CreateValueListResponse {
        this['values'] = values;
        return this;
    }
    public withProducer(producer: number): CreateValueListResponse {
        this['producer'] = producer;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateValueListResponseTypeEnum {
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
