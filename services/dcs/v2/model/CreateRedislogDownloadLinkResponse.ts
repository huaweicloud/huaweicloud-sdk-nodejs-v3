
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRedislogDownloadLinkResponse extends SdkResponse {
    public id?: string;
    public link?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateRedislogDownloadLinkResponse {
        this['id'] = id;
        return this;
    }
    public withLink(link: string): CreateRedislogDownloadLinkResponse {
        this['link'] = link;
        return this;
    }
}