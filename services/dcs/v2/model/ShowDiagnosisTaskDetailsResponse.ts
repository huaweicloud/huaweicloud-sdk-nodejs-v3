import { DiagnosisNodeReport } from './DiagnosisNodeReport';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisTaskDetailsResponse extends SdkResponse {
    private 'abnormal_item_sum'?: number | undefined;
    private 'failed_item_sum'?: number | undefined;
    private 'diagnosis_node_report_list'?: Array<DiagnosisNodeReport> | undefined;
    public constructor() { 
        super();
    }
    public withAbnormalItemSum(abnormalItemSum: number): ShowDiagnosisTaskDetailsResponse {
        this['abnormal_item_sum'] = abnormalItemSum;
        return this;
    }
    public set abnormalItemSum(abnormalItemSum: number | undefined) {
        this['abnormal_item_sum'] = abnormalItemSum;
    }
    public get abnormalItemSum() {
        return this['abnormal_item_sum'];
    }
    public withFailedItemSum(failedItemSum: number): ShowDiagnosisTaskDetailsResponse {
        this['failed_item_sum'] = failedItemSum;
        return this;
    }
    public set failedItemSum(failedItemSum: number | undefined) {
        this['failed_item_sum'] = failedItemSum;
    }
    public get failedItemSum() {
        return this['failed_item_sum'];
    }
    public withDiagnosisNodeReportList(diagnosisNodeReportList: Array<DiagnosisNodeReport>): ShowDiagnosisTaskDetailsResponse {
        this['diagnosis_node_report_list'] = diagnosisNodeReportList;
        return this;
    }
    public set diagnosisNodeReportList(diagnosisNodeReportList: Array<DiagnosisNodeReport> | undefined) {
        this['diagnosis_node_report_list'] = diagnosisNodeReportList;
    }
    public get diagnosisNodeReportList() {
        return this['diagnosis_node_report_list'];
    }
}