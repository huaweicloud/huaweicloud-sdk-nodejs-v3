
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteValueListResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: string;
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
    public withType(type: string): DeleteValueListResponse {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteValueListResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}