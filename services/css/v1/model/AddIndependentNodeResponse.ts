
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddIndependentNodeResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): AddIndependentNodeResponse {
        this['id'] = id;
        return this;
    }
}