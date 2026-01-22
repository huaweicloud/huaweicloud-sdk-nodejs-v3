
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDiagnosisTaskForRocketMqResponse extends SdkResponse {
    private 'report_id'?: string;
    public constructor() { 
        super();
    }
    public withReportId(reportId: string): CreateDiagnosisTaskForRocketMqResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
}