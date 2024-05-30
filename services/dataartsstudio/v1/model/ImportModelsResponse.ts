import { ExportDesignModelsResultData } from './ExportDesignModelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportModelsResponse extends SdkResponse {
    public data?: ExportDesignModelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ExportDesignModelsResultData): ImportModelsResponse {
        this['data'] = data;
        return this;
    }
}