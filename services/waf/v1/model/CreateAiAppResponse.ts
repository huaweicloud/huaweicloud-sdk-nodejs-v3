
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAiAppResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public createTime?: number;
    public apiSign?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAiAppResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateAiAppResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAiAppResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): CreateAiAppResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withApiSign(apiSign: string): CreateAiAppResponse {
        this['apiSign'] = apiSign;
        return this;
    }
}