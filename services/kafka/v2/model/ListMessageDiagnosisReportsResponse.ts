import { KafkaMessageDiagnosisReportInfoEntity } from './KafkaMessageDiagnosisReportInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageDiagnosisReportsResponse extends SdkResponse {
    private 'report_list'?: Array<KafkaMessageDiagnosisReportInfoEntity>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withReportList(reportList: Array<KafkaMessageDiagnosisReportInfoEntity>): ListMessageDiagnosisReportsResponse {
        this['report_list'] = reportList;
        return this;
    }
    public set reportList(reportList: Array<KafkaMessageDiagnosisReportInfoEntity>  | undefined) {
        this['report_list'] = reportList;
    }
    public get reportList(): Array<KafkaMessageDiagnosisReportInfoEntity> | undefined {
        return this['report_list'];
    }
    public withTotalNum(totalNum: number): ListMessageDiagnosisReportsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}