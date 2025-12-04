
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteValueListResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: DeleteValueListResponseTypeEnum | string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteValueListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteValueListResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: DeleteValueListResponseTypeEnum | string): DeleteValueListResponse {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteValueListResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteValueListResponseTypeEnum {
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
