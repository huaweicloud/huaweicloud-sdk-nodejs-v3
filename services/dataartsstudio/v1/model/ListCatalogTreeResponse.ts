import { ListCatalogTreeResultData } from './ListCatalogTreeResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCatalogTreeResponse extends SdkResponse {
    public data?: ListCatalogTreeResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListCatalogTreeResultData): ListCatalogTreeResponse {
        this['data'] = data;
        return this;
    }
}