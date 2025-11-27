
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFederationConnectionResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateFederationConnectionResponse {
        this['id'] = id;
        return this;
    }
}