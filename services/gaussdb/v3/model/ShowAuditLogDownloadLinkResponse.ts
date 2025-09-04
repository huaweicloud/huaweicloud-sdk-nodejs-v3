
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditLogDownloadLinkResponse extends SdkResponse {
    public links?: Array<string>;
    public constructor() { 
        super();
    }
    public withLinks(links: Array<string>): ShowAuditLogDownloadLinkResponse {
        this['links'] = links;
        return this;
    }
}