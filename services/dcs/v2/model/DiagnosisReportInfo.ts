

export class DiagnosisReportInfo {
    private 'report_id'?: string;
    public status?: DiagnosisReportInfoStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'created_at'?: string;
    private 'node_num'?: number;
    private 'abnormal_item_sum'?: number;
    private 'failed_item_sum'?: number;
    public constructor(reportId?: string, status?: string, beginTime?: string, endTime?: string, createdAt?: string, nodeNum?: number, abnormalItemSum?: number, failedItemSum?: number) { 
        this['report_id'] = reportId;
        this['status'] = status;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['created_at'] = createdAt;
        this['node_num'] = nodeNum;
        this['abnormal_item_sum'] = abnormalItemSum;
        this['failed_item_sum'] = failedItemSum;
    }
    public withReportId(reportId: string): DiagnosisReportInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withStatus(status: DiagnosisReportInfoStatusEnum | string): DiagnosisReportInfo {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): DiagnosisReportInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): DiagnosisReportInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCreatedAt(createdAt: string): DiagnosisReportInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withNodeNum(nodeNum: number): DiagnosisReportInfo {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withAbnormalItemSum(abnormalItemSum: number): DiagnosisReportInfo {
        this['abnormal_item_sum'] = abnormalItemSum;
        return this;
    }
    public set abnormalItemSum(abnormalItemSum: number  | undefined) {
        this['abnormal_item_sum'] = abnormalItemSum;
    }
    public get abnormalItemSum(): number | undefined {
        return this['abnormal_item_sum'];
    }
    public withFailedItemSum(failedItemSum: number): DiagnosisReportInfo {
        this['failed_item_sum'] = failedItemSum;
        return this;
    }
    public set failedItemSum(failedItemSum: number  | undefined) {
        this['failed_item_sum'] = failedItemSum;
    }
    public get failedItemSum(): number | undefined {
        return this['failed_item_sum'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiagnosisReportInfoStatusEnum {
    DIAGNOSING = 'diagnosing',
    FINISHED = 'finished'
}
