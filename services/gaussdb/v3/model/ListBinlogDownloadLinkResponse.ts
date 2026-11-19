
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBinlogDownloadLinkResponse extends SdkResponse {
    public links?: Array<string>;
    public constructor() { 
        super();
    }
    public withLinks(links: Array<string>): ListBinlogDownloadLinkResponse {
        this['links'] = links;
        return this;
    }
}