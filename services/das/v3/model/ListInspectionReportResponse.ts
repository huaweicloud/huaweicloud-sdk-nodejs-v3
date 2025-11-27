import { BatchInspectionReport } from './BatchInspectionReport';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInspectionReportResponse extends SdkResponse {
    public total?: number;
    private 'batch_inspection_report_list'?: Array<BatchInspectionReport>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInspectionReportResponse {
        this['total'] = total;
        return this;
    }
    public withBatchInspectionReportList(batchInspectionReportList: Array<BatchInspectionReport>): ListInspectionReportResponse {
        this['batch_inspection_report_list'] = batchInspectionReportList;
        return this;
    }
    public set batchInspectionReportList(batchInspectionReportList: Array<BatchInspectionReport>  | undefined) {
        this['batch_inspection_report_list'] = batchInspectionReportList;
    }
    public get batchInspectionReportList(): Array<BatchInspectionReport> | undefined {
        return this['batch_inspection_report_list'];
    }
}