

export class DiagnosisReportResp {
    private 'report_id'?: string;
    private 'group_name'?: string;
    private 'consumer_nums'?: number;
    public status?: string;
    private 'created_at'?: string;
    private 'abnormal_item_sum'?: number;
    private 'faulted_node_sum'?: number;
    public constructor() { 
    }
    public withReportId(reportId: string): DiagnosisReportResp {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withGroupName(groupName: string): DiagnosisReportResp {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withConsumerNums(consumerNums: number): DiagnosisReportResp {
        this['consumer_nums'] = consumerNums;
        return this;
    }
    public set consumerNums(consumerNums: number  | undefined) {
        this['consumer_nums'] = consumerNums;
    }
    public get consumerNums(): number | undefined {
        return this['consumer_nums'];
    }
    public withStatus(status: string): DiagnosisReportResp {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): DiagnosisReportResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withAbnormalItemSum(abnormalItemSum: number): DiagnosisReportResp {
        this['abnormal_item_sum'] = abnormalItemSum;
        return this;
    }
    public set abnormalItemSum(abnormalItemSum: number  | undefined) {
        this['abnormal_item_sum'] = abnormalItemSum;
    }
    public get abnormalItemSum(): number | undefined {
        return this['abnormal_item_sum'];
    }
    public withFaultedNodeSum(faultedNodeSum: number): DiagnosisReportResp {
        this['faulted_node_sum'] = faultedNodeSum;
        return this;
    }
    public set faultedNodeSum(faultedNodeSum: number  | undefined) {
        this['faulted_node_sum'] = faultedNodeSum;
    }
    public get faultedNodeSum(): number | undefined {
        return this['faulted_node_sum'];
    }
}