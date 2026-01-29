import { DiagnosisReportResp } from './DiagnosisReportResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDiagnosisReportsForRocketMqResponse extends SdkResponse {
    private 'diagnosis_report_list'?: Array<DiagnosisReportResp>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDiagnosisReportList(diagnosisReportList: Array<DiagnosisReportResp>): ListDiagnosisReportsForRocketMqResponse {
        this['diagnosis_report_list'] = diagnosisReportList;
        return this;
    }
    public set diagnosisReportList(diagnosisReportList: Array<DiagnosisReportResp>  | undefined) {
        this['diagnosis_report_list'] = diagnosisReportList;
    }
    public get diagnosisReportList(): Array<DiagnosisReportResp> | undefined {
        return this['diagnosis_report_list'];
    }
    public withTotalNum(totalNum: number): ListDiagnosisReportsForRocketMqResponse {
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