import { DsExportResultVOData } from './DsExportResultVOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportDesignResultResponse extends SdkResponse {
    public data?: DsExportResultVOData;
    public constructor() { 
        super();
    }
    public withData(data: DsExportResultVOData): ExportDesignResultResponse {
        this['data'] = data;
        return this;
    }
}