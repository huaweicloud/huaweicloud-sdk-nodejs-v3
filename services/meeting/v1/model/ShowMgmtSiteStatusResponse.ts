
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMgmtSiteStatusResponse extends SdkResponse {
    public status?: string;
    public redirectJoinUrl?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowMgmtSiteStatusResponse {
        this['status'] = status;
        return this;
    }
    public withRedirectJoinUrl(redirectJoinUrl: string): ShowMgmtSiteStatusResponse {
        this['redirectJoinUrl'] = redirectJoinUrl;
        return this;
    }
}