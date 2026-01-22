
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteDiagnosisRecordsForRocketMqResponse extends SdkResponse {
    private 'report_id_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withReportIdList(reportIdList: Array<string>): BatchDeleteDiagnosisRecordsForRocketMqResponse {
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