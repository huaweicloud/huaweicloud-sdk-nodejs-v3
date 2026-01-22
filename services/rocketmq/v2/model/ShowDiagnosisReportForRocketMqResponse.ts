import { DiagnosisNodeReportEntity } from './DiagnosisNodeReportEntity';
import { SubscriptionEntity } from './SubscriptionEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisReportForRocketMqResponse extends SdkResponse {
    private 'report_id'?: string;
    private 'group_name'?: string;
    private 'consumer_nums'?: number;
    public status?: string;
    private 'created_at'?: number;
    private 'abnormal_item_sum'?: number;
    private 'faulted_node_sum'?: number;
    public online?: boolean;
    private 'message_accumulation'?: number;
    private 'subscription_consistency'?: boolean;
    private 'duplicate_client_id'?: boolean;
    private 'different_consumer_type'?: boolean;
    public subscriptions?: Array<SubscriptionEntity>;
    private 'diagnosis_node_report_list'?: Array<DiagnosisNodeReportEntity>;
    public constructor() { 
        super();
    }
    public withReportId(reportId: string): ShowDiagnosisReportForRocketMqResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withGroupName(groupName: string): ShowDiagnosisReportForRocketMqResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withConsumerNums(consumerNums: number): ShowDiagnosisReportForRocketMqResponse {
        this['consumer_nums'] = consumerNums;
        return this;
    }
    public set consumerNums(consumerNums: number  | undefined) {
        this['consumer_nums'] = consumerNums;
    }
    public get consumerNums(): number | undefined {
        return this['consumer_nums'];
    }
    public withStatus(status: string): ShowDiagnosisReportForRocketMqResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: number): ShowDiagnosisReportForRocketMqResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withAbnormalItemSum(abnormalItemSum: number): ShowDiagnosisReportForRocketMqResponse {
        this['abnormal_item_sum'] = abnormalItemSum;
        return this;
    }
    public set abnormalItemSum(abnormalItemSum: number  | undefined) {
        this['abnormal_item_sum'] = abnormalItemSum;
    }
    public get abnormalItemSum(): number | undefined {
        return this['abnormal_item_sum'];
    }
    public withFaultedNodeSum(faultedNodeSum: number): ShowDiagnosisReportForRocketMqResponse {
        this['faulted_node_sum'] = faultedNodeSum;
        return this;
    }
    public set faultedNodeSum(faultedNodeSum: number  | undefined) {
        this['faulted_node_sum'] = faultedNodeSum;
    }
    public get faultedNodeSum(): number | undefined {
        return this['faulted_node_sum'];
    }
    public withOnline(online: boolean): ShowDiagnosisReportForRocketMqResponse {
        this['online'] = online;
        return this;
    }
    public withMessageAccumulation(messageAccumulation: number): ShowDiagnosisReportForRocketMqResponse {
        this['message_accumulation'] = messageAccumulation;
        return this;
    }
    public set messageAccumulation(messageAccumulation: number  | undefined) {
        this['message_accumulation'] = messageAccumulation;
    }
    public get messageAccumulation(): number | undefined {
        return this['message_accumulation'];
    }
    public withSubscriptionConsistency(subscriptionConsistency: boolean): ShowDiagnosisReportForRocketMqResponse {
        this['subscription_consistency'] = subscriptionConsistency;
        return this;
    }
    public set subscriptionConsistency(subscriptionConsistency: boolean  | undefined) {
        this['subscription_consistency'] = subscriptionConsistency;
    }
    public get subscriptionConsistency(): boolean | undefined {
        return this['subscription_consistency'];
    }
    public withDuplicateClientId(duplicateClientId: boolean): ShowDiagnosisReportForRocketMqResponse {
        this['duplicate_client_id'] = duplicateClientId;
        return this;
    }
    public set duplicateClientId(duplicateClientId: boolean  | undefined) {
        this['duplicate_client_id'] = duplicateClientId;
    }
    public get duplicateClientId(): boolean | undefined {
        return this['duplicate_client_id'];
    }
    public withDifferentConsumerType(differentConsumerType: boolean): ShowDiagnosisReportForRocketMqResponse {
        this['different_consumer_type'] = differentConsumerType;
        return this;
    }
    public set differentConsumerType(differentConsumerType: boolean  | undefined) {
        this['different_consumer_type'] = differentConsumerType;
    }
    public get differentConsumerType(): boolean | undefined {
        return this['different_consumer_type'];
    }
    public withSubscriptions(subscriptions: Array<SubscriptionEntity>): ShowDiagnosisReportForRocketMqResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withDiagnosisNodeReportList(diagnosisNodeReportList: Array<DiagnosisNodeReportEntity>): ShowDiagnosisReportForRocketMqResponse {
        this['diagnosis_node_report_list'] = diagnosisNodeReportList;
        return this;
    }
    public set diagnosisNodeReportList(diagnosisNodeReportList: Array<DiagnosisNodeReportEntity>  | undefined) {
        this['diagnosis_node_report_list'] = diagnosisNodeReportList;
    }
    public get diagnosisNodeReportList(): Array<DiagnosisNodeReportEntity> | undefined {
        return this['diagnosis_node_report_list'];
    }
}