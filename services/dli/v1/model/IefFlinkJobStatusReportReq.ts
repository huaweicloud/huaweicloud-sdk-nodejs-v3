import { Jobs } from './Jobs';


export class IefFlinkJobStatusReportReq {
    public jobs?: Array<Jobs>;
    private 'message_id'?: string;
    private 'msg_confirm_topic'?: string;
    public constructor(jobs?: Array<Jobs>, messageId?: string) { 
        this['jobs'] = jobs;
        this['message_id'] = messageId;
    }
    public withJobs(jobs: Array<Jobs>): IefFlinkJobStatusReportReq {
        this['jobs'] = jobs;
        return this;
    }
    public withMessageId(messageId: string): IefFlinkJobStatusReportReq {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withMsgConfirmTopic(msgConfirmTopic: string): IefFlinkJobStatusReportReq {
        this['msg_confirm_topic'] = msgConfirmTopic;
        return this;
    }
    public set msgConfirmTopic(msgConfirmTopic: string  | undefined) {
        this['msg_confirm_topic'] = msgConfirmTopic;
    }
    public get msgConfirmTopic(): string | undefined {
        return this['msg_confirm_topic'];
    }
}