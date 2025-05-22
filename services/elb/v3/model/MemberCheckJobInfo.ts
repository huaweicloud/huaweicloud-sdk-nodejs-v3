import { MemberCheckJobResult } from './MemberCheckJobResult';


export class MemberCheckJobInfo {
    public status?: string;
    public result?: MemberCheckJobResult;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'job_id'?: string;
    private 'check_item_total_num'?: number;
    private 'check_item_finished_num'?: number;
    private 'listener_id'?: string;
    private 'member_id'?: string;
    public constructor() { 
    }
    public withStatus(status: string): MemberCheckJobInfo {
        this['status'] = status;
        return this;
    }
    public withResult(result: MemberCheckJobResult): MemberCheckJobInfo {
        this['result'] = result;
        return this;
    }
    public withCreatedAt(createdAt: string): MemberCheckJobInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MemberCheckJobInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withJobId(jobId: string): MemberCheckJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCheckItemTotalNum(checkItemTotalNum: number): MemberCheckJobInfo {
        this['check_item_total_num'] = checkItemTotalNum;
        return this;
    }
    public set checkItemTotalNum(checkItemTotalNum: number  | undefined) {
        this['check_item_total_num'] = checkItemTotalNum;
    }
    public get checkItemTotalNum(): number | undefined {
        return this['check_item_total_num'];
    }
    public withCheckItemFinishedNum(checkItemFinishedNum: number): MemberCheckJobInfo {
        this['check_item_finished_num'] = checkItemFinishedNum;
        return this;
    }
    public set checkItemFinishedNum(checkItemFinishedNum: number  | undefined) {
        this['check_item_finished_num'] = checkItemFinishedNum;
    }
    public get checkItemFinishedNum(): number | undefined {
        return this['check_item_finished_num'];
    }
    public withListenerId(listenerId: string): MemberCheckJobInfo {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withMemberId(memberId: string): MemberCheckJobInfo {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
}