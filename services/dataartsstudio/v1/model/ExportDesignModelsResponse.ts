import { ExportDesignModelsResultData } from './ExportDesignModelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportDesignModelsResponse extends SdkResponse {
    public data?: ExportDesignModelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ExportDesignModelsResultData): ExportDesignModelsResponse {
        this['data'] = data;
        return this;
    }
}