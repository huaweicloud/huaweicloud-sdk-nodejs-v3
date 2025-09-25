import { OperationSummaryInfo } from './OperationSummaryInfo';
import { ProtectInfo } from './ProtectInfo';
import { RiskHandleInfo } from './RiskHandleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonthlyOperationReportDetailResponse extends SdkResponse {
    private 'operation_summary_info'?: OperationSummaryInfo;
    private 'protect_info'?: ProtectInfo;
    private 'risk_handle_info'?: RiskHandleInfo;
    public constructor() { 
        super();
    }
    public withOperationSummaryInfo(operationSummaryInfo: OperationSummaryInfo): ShowMonthlyOperationReportDetailResponse {
        this['operation_summary_info'] = operationSummaryInfo;
        return this;
    }
    public set operationSummaryInfo(operationSummaryInfo: OperationSummaryInfo  | undefined) {
        this['operation_summary_info'] = operationSummaryInfo;
    }
    public get operationSummaryInfo(): OperationSummaryInfo | undefined {
        return this['operation_summary_info'];
    }
    public withProtectInfo(protectInfo: ProtectInfo): ShowMonthlyOperationReportDetailResponse {
        this['protect_info'] = protectInfo;
        return this;
    }
    public set protectInfo(protectInfo: ProtectInfo  | undefined) {
        this['protect_info'] = protectInfo;
    }
    public get protectInfo(): ProtectInfo | undefined {
        return this['protect_info'];
    }
    public withRiskHandleInfo(riskHandleInfo: RiskHandleInfo): ShowMonthlyOperationReportDetailResponse {
        this['risk_handle_info'] = riskHandleInfo;
        return this;
    }
    public set riskHandleInfo(riskHandleInfo: RiskHandleInfo  | undefined) {
        this['risk_handle_info'] = riskHandleInfo;
    }
    public get riskHandleInfo(): RiskHandleInfo | undefined {
        return this['risk_handle_info'];
    }
}