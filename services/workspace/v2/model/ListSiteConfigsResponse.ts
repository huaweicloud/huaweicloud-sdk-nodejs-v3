import { SiteInfo } from './SiteInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSiteConfigsResponse extends SdkResponse {
    private 'site_infos'?: Array<SiteInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSiteInfos(siteInfos: Array<SiteInfo>): ListSiteConfigsResponse {
        this['site_infos'] = siteInfos;
        return this;
    }
    public set siteInfos(siteInfos: Array<SiteInfo>  | undefined) {
        this['site_infos'] = siteInfos;
    }
    public get siteInfos(): Array<SiteInfo> | undefined {
        return this['site_infos'];
    }
    public withTotalCount(totalCount: number): ListSiteConfigsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}