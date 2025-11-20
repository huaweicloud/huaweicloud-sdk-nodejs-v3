
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultSecurityCheckPolicyResponse extends SdkResponse {
    public content?: string;
    public constructor() { 
        super();
    }
    public withContent(content: string): ShowDefaultSecurityCheckPolicyResponse {
        this['content'] = content;
        return this;
    }
}