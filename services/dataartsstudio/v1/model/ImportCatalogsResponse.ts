import { ExportDesignModelsResultData } from './ExportDesignModelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportCatalogsResponse extends SdkResponse {
    public data?: ExportDesignModelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ExportDesignModelsResultData): ImportCatalogsResponse {
        this['data'] = data;
        return this;
    }
}