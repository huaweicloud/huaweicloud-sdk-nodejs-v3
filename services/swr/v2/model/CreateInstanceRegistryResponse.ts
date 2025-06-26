
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceRegistryResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateInstanceRegistryResponse {
        this['id'] = id;
        return this;
    }
}