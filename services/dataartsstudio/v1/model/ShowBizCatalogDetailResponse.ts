import { CreateCatalogResultData } from './CreateCatalogResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBizCatalogDetailResponse extends SdkResponse {
    public data?: CreateCatalogResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCatalogResultData): ShowBizCatalogDetailResponse {
        this['data'] = data;
        return this;
    }
}