import { InstanceHealthReport } from './InstanceHealthReport';


export class EmailRecord {
    private 'send_at'?: number;
    private 'send_status'?: number;
    public email?: string;
    public topic?: string;
    private 'topic_urn'?: string;
    private 'instance_health_report_list'?: Array<InstanceHealthReport>;
    public constructor(sendAt?: number, sendStatus?: number, email?: string, topic?: string, topicUrn?: string, instanceHealthReportList?: Array<InstanceHealthReport>) { 
        this['send_at'] = sendAt;
        this['send_status'] = sendStatus;
        this['email'] = email;
        this['topic'] = topic;
        this['topic_urn'] = topicUrn;
        this['instance_health_report_list'] = instanceHealthReportList;
    }
    public withSendAt(sendAt: number): EmailRecord {
        this['send_at'] = sendAt;
        return this;
    }
    public set sendAt(sendAt: number  | undefined) {
        this['send_at'] = sendAt;
    }
    public get sendAt(): number | undefined {
        return this['send_at'];
    }
    public withSendStatus(sendStatus: number): EmailRecord {
        this['send_status'] = sendStatus;
        return this;
    }
    public set sendStatus(sendStatus: number  | undefined) {
        this['send_status'] = sendStatus;
    }
    public get sendStatus(): number | undefined {
        return this['send_status'];
    }
    public withEmail(email: string): EmailRecord {
        this['email'] = email;
        return this;
    }
    public withTopic(topic: string): EmailRecord {
        this['topic'] = topic;
        return this;
    }
    public withTopicUrn(topicUrn: string): EmailRecord {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withInstanceHealthReportList(instanceHealthReportList: Array<InstanceHealthReport>): EmailRecord {
        this['instance_health_report_list'] = instanceHealthReportList;
        return this;
    }
    public set instanceHealthReportList(instanceHealthReportList: Array<InstanceHealthReport>  | undefined) {
        this['instance_health_report_list'] = instanceHealthReportList;
    }
    public get instanceHealthReportList(): Array<InstanceHealthReport> | undefined {
        return this['instance_health_report_list'];
    }
}