import { DsProcessImportResultVO } from './DsProcessImportResultVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportResultResponse extends SdkResponse {
    public data?: DsProcessImportResultVO;
    public constructor() { 
        super();
    }
    public withData(data: DsProcessImportResultVO): ImportResultResponse {
        this['data'] = data;
        return this;
    }
}