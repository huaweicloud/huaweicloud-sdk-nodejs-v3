import { BizInfoVO } from './BizInfoVO';


export class ApprovalBatchParam {
    private 'biz_infos'?: Array<BizInfoVO>;
    private 'approver_user_id'?: string;
    private 'approver_user_name'?: string;
    public email?: string;
    private 'fast_approval'?: boolean;
    private 'schedule_time'?: string;
    public constructor(bizInfos?: Array<BizInfoVO>, approverUserId?: string, approverUserName?: string) { 
        this['biz_infos'] = bizInfos;
        this['approver_user_id'] = approverUserId;
        this['approver_user_name'] = approverUserName;
    }
    public withBizInfos(bizInfos: Array<BizInfoVO>): ApprovalBatchParam {
        this['biz_infos'] = bizInfos;
        return this;
    }
    public set bizInfos(bizInfos: Array<BizInfoVO>  | undefined) {
        this['biz_infos'] = bizInfos;
    }
    public get bizInfos(): Array<BizInfoVO> | undefined {
        return this['biz_infos'];
    }
    public withApproverUserId(approverUserId: string): ApprovalBatchParam {
        this['approver_user_id'] = approverUserId;
        return this;
    }
    public set approverUserId(approverUserId: string  | undefined) {
        this['approver_user_id'] = approverUserId;
    }
    public get approverUserId(): string | undefined {
        return this['approver_user_id'];
    }
    public withApproverUserName(approverUserName: string): ApprovalBatchParam {
        this['approver_user_name'] = approverUserName;
        return this;
    }
    public set approverUserName(approverUserName: string  | undefined) {
        this['approver_user_name'] = approverUserName;
    }
    public get approverUserName(): string | undefined {
        return this['approver_user_name'];
    }
    public withEmail(email: string): ApprovalBatchParam {
        this['email'] = email;
        return this;
    }
    public withFastApproval(fastApproval: boolean): ApprovalBatchParam {
        this['fast_approval'] = fastApproval;
        return this;
    }
    public set fastApproval(fastApproval: boolean  | undefined) {
        this['fast_approval'] = fastApproval;
    }
    public get fastApproval(): boolean | undefined {
        return this['fast_approval'];
    }
    public withScheduleTime(scheduleTime: string): ApprovalBatchParam {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: string  | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime(): string | undefined {
        return this['schedule_time'];
    }
}