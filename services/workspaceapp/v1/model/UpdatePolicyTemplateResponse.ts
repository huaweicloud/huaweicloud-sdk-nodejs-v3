
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyTemplateResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePolicyTemplateResponse {
        this['id'] = id;
        return this;
    }
}