
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePolicyTemplateResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePolicyTemplateResponse {
        this['id'] = id;
        return this;
    }
}