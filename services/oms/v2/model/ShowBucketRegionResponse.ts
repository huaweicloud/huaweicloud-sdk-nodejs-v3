
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBucketRegionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public support?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBucketRegionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowBucketRegionResponse {
        this['name'] = name;
        return this;
    }
    public withSupport(support: boolean): ShowBucketRegionResponse {
        this['support'] = support;
        return this;
    }
}