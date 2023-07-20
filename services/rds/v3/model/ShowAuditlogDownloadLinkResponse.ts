
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditlogDownloadLinkResponse extends SdkResponse {
    public links?: Array<string>;
    public constructor() { 
        super();
    }
    public withLinks(links: Array<string>): ShowAuditlogDownloadLinkResponse {
        this['links'] = links;
        return this;
    }
}