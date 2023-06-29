
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfOrgResponse extends SdkResponse {
    public orgID?: string;
    public constructor() { 
        super();
    }
    public withOrgID(orgID: string): ShowConfOrgResponse {
        this['orgID'] = orgID;
        return this;
    }
}