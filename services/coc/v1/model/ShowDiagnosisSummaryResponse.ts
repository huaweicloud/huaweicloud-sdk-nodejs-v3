import { BasicResponse } from './BasicResponse';
import { DiagnosisSummaryItem } from './DiagnosisSummaryItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisSummaryResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public status?: string;
    public region?: string;
    private 'start_time'?: number;
    private 'instance_summary'?: Array<DiagnosisSummaryItem>;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ShowDiagnosisSummaryResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowDiagnosisSummaryResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withStatus(status: string): ShowDiagnosisSummaryResponse {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): ShowDiagnosisSummaryResponse {
        this['region'] = region;
        return this;
    }
    public withStartTime(startTime: number): ShowDiagnosisSummaryResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withInstanceSummary(instanceSummary: Array<DiagnosisSummaryItem>): ShowDiagnosisSummaryResponse {
        this['instance_summary'] = instanceSummary;
        return this;
    }
    public set instanceSummary(instanceSummary: Array<DiagnosisSummaryItem>  | undefined) {
        this['instance_summary'] = instanceSummary;
    }
    public get instanceSummary(): Array<DiagnosisSummaryItem> | undefined {
        return this['instance_summary'];
    }
}