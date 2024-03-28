

export class KafkaMessageDiagnosisReportInfoEntity {
    private 'report_id'?: string;
    public status?: KafkaMessageDiagnosisReportInfoEntityStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'group_name'?: string;
    private 'topic_name'?: string;
    private 'accumulated_partitions'?: number;
    public constructor(reportId?: string, status?: string, beginTime?: string, groupName?: string, topicName?: string, accumulatedPartitions?: number) { 
        this['report_id'] = reportId;
        this['status'] = status;
        this['begin_time'] = beginTime;
        this['group_name'] = groupName;
        this['topic_name'] = topicName;
        this['accumulated_partitions'] = accumulatedPartitions;
    }
    public withReportId(reportId: string): KafkaMessageDiagnosisReportInfoEntity {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withStatus(status: KafkaMessageDiagnosisReportInfoEntityStatusEnum | string): KafkaMessageDiagnosisReportInfoEntity {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): KafkaMessageDiagnosisReportInfoEntity {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): KafkaMessageDiagnosisReportInfoEntity {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withGroupName(groupName: string): KafkaMessageDiagnosisReportInfoEntity {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withTopicName(topicName: string): KafkaMessageDiagnosisReportInfoEntity {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withAccumulatedPartitions(accumulatedPartitions: number): KafkaMessageDiagnosisReportInfoEntity {
        this['accumulated_partitions'] = accumulatedPartitions;
        return this;
    }
    public set accumulatedPartitions(accumulatedPartitions: number  | undefined) {
        this['accumulated_partitions'] = accumulatedPartitions;
    }
    public get accumulatedPartitions(): number | undefined {
        return this['accumulated_partitions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KafkaMessageDiagnosisReportInfoEntityStatusEnum {
    DIAGNOSING = 'diagnosing',
    FAILED = 'failed',
    DELETED = 'deleted',
    FINISHED = 'finished',
    NORMAL = 'normal',
    ABNORMAL = 'abnormal'
}
