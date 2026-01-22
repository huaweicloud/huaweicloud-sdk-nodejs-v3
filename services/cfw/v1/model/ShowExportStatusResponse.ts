import { ExportStatusVO } from './ExportStatusVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExportStatusResponse extends SdkResponse {
    public data?: ExportStatusVO;
    public constructor() { 
        super();
    }
    public withData(data: ExportStatusVO): ShowExportStatusResponse {
        this['data'] = data;
        return this;
    }
}