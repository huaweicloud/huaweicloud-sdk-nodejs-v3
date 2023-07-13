
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMetadata2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateMetadata2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateMetadata2Response {
        this['name'] = name;
        return this;
    }
}