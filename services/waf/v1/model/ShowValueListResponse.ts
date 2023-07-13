
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowValueListResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: string;
    public description?: string;
    public values?: Array<string>;
    public producer?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowValueListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowValueListResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowValueListResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowValueListResponse {
        this['description'] = description;
        return this;
    }
    public withValues(values: Array<string>): ShowValueListResponse {
        this['values'] = values;
        return this;
    }
    public withProducer(producer: number): ShowValueListResponse {
        this['producer'] = producer;
        return this;
    }
    public withTimestamp(timestamp: number): ShowValueListResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}