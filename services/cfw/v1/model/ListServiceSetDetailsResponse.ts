
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSetDetailsResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ListServiceSetDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListServiceSetDetailsResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListServiceSetDetailsResponse {
        this['description'] = description;
        return this;
    }
}