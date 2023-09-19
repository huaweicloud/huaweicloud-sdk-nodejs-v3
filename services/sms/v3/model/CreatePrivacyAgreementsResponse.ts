
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrivacyAgreementsResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CreatePrivacyAgreementsResponse {
        this['body'] = body;
        return this;
    }
}