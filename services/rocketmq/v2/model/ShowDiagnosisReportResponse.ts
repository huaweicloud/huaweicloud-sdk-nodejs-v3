
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisReportResponse extends SdkResponse {
    private 'report_id'?: string;
    private 'group_name'?: string;
    private 'consumer_nums'?: number;
    public status?: string;
    private 'creat_at'?: number;
    private 'abnormal_item_sum'?: number;
    private 'faulted_node_sum'?: number;
    public online?: boolean;
    private 'message_accumulation'?: number;
    private 'subscription_consistency'?: boolean;
    public subscriptions?: Array<string>;
    private 'diagnosis_node_report_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withReportId(reportId: string): ShowDiagnosisReportResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withGroupName(groupName: string): ShowDiagnosisReportResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withConsumerNums(consumerNums: number): ShowDiagnosisReportResponse {
        this['consumer_nums'] = consumerNums;
        return this;
    }
    public set consumerNums(consumerNums: number  | undefined) {
        this['consumer_nums'] = consumerNums;
    }
    public get consumerNums(): number | undefined {
        return this['consumer_nums'];
    }
    public withStatus(status: string): ShowDiagnosisReportResponse {
        this['status'] = status;
        return this;
    }
    public withCreatAt(creatAt: number): ShowDiagnosisReportResponse {
        this['creat_at'] = creatAt;
        return this;
    }
    public set creatAt(creatAt: number  | undefined) {
        this['creat_at'] = creatAt;
    }
    public get creatAt(): number | undefined {
        return this['creat_at'];
    }
    public withAbnormalItemSum(abnormalItemSum: number): ShowDiagnosisReportResponse {
        this['abnormal_item_sum'] = abnormalItemSum;
        return this;
    }
    public set abnormalItemSum(abnormalItemSum: number  | undefined) {
        this['abnormal_item_sum'] = abnormalItemSum;
    }
    public get abnormalItemSum(): number | undefined {
        return this['abnormal_item_sum'];
    }
    public withFaultedNodeSum(faultedNodeSum: number): ShowDiagnosisReportResponse {
        this['faulted_node_sum'] = faultedNodeSum;
        return this;
    }
    public set faultedNodeSum(faultedNodeSum: number  | undefined) {
        this['faulted_node_sum'] = faultedNodeSum;
    }
    public get faultedNodeSum(): number | undefined {
        return this['faulted_node_sum'];
    }
    public withOnline(online: boolean): ShowDiagnosisReportResponse {
        this['online'] = online;
        return this;
    }
    public withMessageAccumulation(messageAccumulation: number): ShowDiagnosisReportResponse {
        this['message_accumulation'] = messageAccumulation;
        return this;
    }
    public set messageAccumulation(messageAccumulation: number  | undefined) {
        this['message_accumulation'] = messageAccumulation;
    }
    public get messageAccumulation(): number | undefined {
        return this['message_accumulation'];
    }
    public withSubscriptionConsistency(subscriptionConsistency: boolean): ShowDiagnosisReportResponse {
        this['subscription_consistency'] = subscriptionConsistency;
        return this;
    }
    public set subscriptionConsistency(subscriptionConsistency: boolean  | undefined) {
        this['subscription_consistency'] = subscriptionConsistency;
    }
    public get subscriptionConsistency(): boolean | undefined {
        return this['subscription_consistency'];
    }
    public withSubscriptions(subscriptions: Array<string>): ShowDiagnosisReportResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withDiagnosisNodeReportList(diagnosisNodeReportList: Array<string>): ShowDiagnosisReportResponse {
        this['diagnosis_node_report_list'] = diagnosisNodeReportList;
        return this;
    }
    public set diagnosisNodeReportList(diagnosisNodeReportList: Array<string>  | undefined) {
        this['diagnosis_node_report_list'] = diagnosisNodeReportList;
    }
    public get diagnosisNodeReportList(): Array<string> | undefined {
        return this['diagnosis_node_report_list'];
    }
}