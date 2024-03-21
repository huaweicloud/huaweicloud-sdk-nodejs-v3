import { UrlDTO } from './UrlDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDatasourceUrlsResponse extends SdkResponse {
    public total?: number;
    public urls?: Array<UrlDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityDatasourceUrlsResponse {
        this['total'] = total;
        return this;
    }
    public withUrls(urls: Array<UrlDTO>): ListSecurityDatasourceUrlsResponse {
        this['urls'] = urls;
        return this;
    }
}