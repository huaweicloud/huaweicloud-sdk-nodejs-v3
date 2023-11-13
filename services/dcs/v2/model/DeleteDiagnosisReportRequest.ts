

export class DeleteDiagnosisReportRequest {
    private 'report_id_list'?: Array<string>;
    public constructor() { 
    }
    public withReportIdList(reportIdList: Array<string>): DeleteDiagnosisReportRequest {
        this['report_id_list'] = reportIdList;
        return this;
    }
    public set reportIdList(reportIdList: Array<string>  | undefined) {
        this['report_id_list'] = reportIdList;
    }
    public get reportIdList(): Array<string> | undefined {
        return this['report_id_list'];
    }
}