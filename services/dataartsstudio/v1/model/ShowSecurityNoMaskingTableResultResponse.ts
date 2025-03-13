import { DiagnoseNoMaskingDetail } from './DiagnoseNoMaskingDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityNoMaskingTableResultResponse extends SdkResponse {
    public total?: number;
    public tables?: Array<DiagnoseNoMaskingDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowSecurityNoMaskingTableResultResponse {
        this['total'] = total;
        return this;
    }
    public withTables(tables: Array<DiagnoseNoMaskingDetail>): ShowSecurityNoMaskingTableResultResponse {
        this['tables'] = tables;
        return this;
    }
}