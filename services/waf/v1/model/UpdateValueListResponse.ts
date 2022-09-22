
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateValueListResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: string;
    public description?: string;
    public values?: Array<string>;
    public producer?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateValueListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateValueListResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): UpdateValueListResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): UpdateValueListResponse {
        this['description'] = description;
        return this;
    }
    public withValues(values: Array<string>): UpdateValueListResponse {
        this['values'] = values;
        return this;
    }
    public withProducer(producer: number): UpdateValueListResponse {
        this['producer'] = producer;
        return this;
    }
}