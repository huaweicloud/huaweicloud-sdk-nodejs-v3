
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAnonymousAuthRandomResponse extends SdkResponse {
    public siteUrl?: string;
    public random?: string;
    public constructor() { 
        super();
    }
    public withSiteUrl(siteUrl: string): CreateAnonymousAuthRandomResponse {
        this['siteUrl'] = siteUrl;
        return this;
    }
    public withRandom(random: string): CreateAnonymousAuthRandomResponse {
        this['random'] = random;
        return this;
    }
}