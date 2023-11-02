import { ApiOverview } from './ApiOverview';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiCatalogListResponse extends SdkResponse {
    public total?: number;
    public apis?: Array<ApiOverview>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListApiCatalogListResponse {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<ApiOverview>): ListApiCatalogListResponse {
        this['apis'] = apis;
        return this;
    }
}