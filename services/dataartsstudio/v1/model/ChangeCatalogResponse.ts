import { CreateCatalogResultData } from './CreateCatalogResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeCatalogResponse extends SdkResponse {
    public data?: CreateCatalogResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCatalogResultData): ChangeCatalogResponse {
        this['data'] = data;
        return this;
    }
}