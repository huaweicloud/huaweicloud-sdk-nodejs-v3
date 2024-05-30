import { CreateCatalogResultData } from './CreateCatalogResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCatalogResponse extends SdkResponse {
    public data?: CreateCatalogResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCatalogResultData): CreateCatalogResponse {
        this['data'] = data;
        return this;
    }
}