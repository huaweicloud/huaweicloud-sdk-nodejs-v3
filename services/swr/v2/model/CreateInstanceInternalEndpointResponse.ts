
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceInternalEndpointResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateInstanceInternalEndpointResponse {
        this['id'] = id;
        return this;
    }
}