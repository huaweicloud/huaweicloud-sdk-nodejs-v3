import { BanUrlList } from './BanUrlList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBanUrlResponse extends SdkResponse {
    public total?: number;
    private 'ban_urls'?: Array<BanUrlList>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBanUrlResponse {
        this['total'] = total;
        return this;
    }
    public withBanUrls(banUrls: Array<BanUrlList>): ListBanUrlResponse {
        this['ban_urls'] = banUrls;
        return this;
    }
    public set banUrls(banUrls: Array<BanUrlList>  | undefined) {
        this['ban_urls'] = banUrls;
    }
    public get banUrls(): Array<BanUrlList> | undefined {
        return this['ban_urls'];
    }
}