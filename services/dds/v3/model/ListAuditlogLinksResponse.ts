
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditlogLinksResponse extends SdkResponse {
    public links?: Array<string>;
    public constructor() { 
        super();
    }
    public withLinks(links: Array<string>): ListAuditlogLinksResponse {
        this['links'] = links;
        return this;
    }
}