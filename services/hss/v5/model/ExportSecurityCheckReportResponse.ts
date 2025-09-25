import { ExportSecurityCheckInfoResponseInfo } from './ExportSecurityCheckInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportSecurityCheckReportResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ExportSecurityCheckInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ExportSecurityCheckReportResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ExportSecurityCheckInfoResponseInfo>): ExportSecurityCheckReportResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ExportSecurityCheckInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ExportSecurityCheckInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}