import { ExportDesignModelTableDDLResultData } from './ExportDesignModelTableDDLResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportDesignModelTableDdlResponse extends SdkResponse {
    public data?: ExportDesignModelTableDDLResultData;
    public constructor() { 
        super();
    }
    public withData(data: ExportDesignModelTableDDLResultData): ExportDesignModelTableDdlResponse {
        this['data'] = data;
        return this;
    }
}