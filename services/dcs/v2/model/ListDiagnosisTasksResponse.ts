import { DiagnosisReportInfo } from './DiagnosisReportInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDiagnosisTasksResponse extends SdkResponse {
    private 'diagnosis_report_list'?: Array<DiagnosisReportInfo> | undefined;
    private 'total_num'?: number | undefined;
    public constructor() { 
        super();
    }
    public withDiagnosisReportList(diagnosisReportList: Array<DiagnosisReportInfo>): ListDiagnosisTasksResponse {
        this['diagnosis_report_list'] = diagnosisReportList;
        return this;
    }
    public set diagnosisReportList(diagnosisReportList: Array<DiagnosisReportInfo> | undefined) {
        this['diagnosis_report_list'] = diagnosisReportList;
    }
    public get diagnosisReportList() {
        return this['diagnosis_report_list'];
    }
    public withTotalNum(totalNum: number): ListDiagnosisTasksResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
}