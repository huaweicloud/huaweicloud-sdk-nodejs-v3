

export class CocUpdateChangeRequestBodySubTickets {
    private 'ticket_id'?: string;
    private 'change_result'?: string;
    private 'is_verified_in_change_time'?: boolean;
    private 'verified_docs'?: string;
    public comment?: string;
    private 'change_fail_type'?: string;
    private 'rollback_start_time'?: number;
    private 'rollback_end_time'?: number;
    private 'is_rollback_success'?: boolean;
    private 'is_monitor_found'?: boolean;
    public constructor() { 
    }
    public withTicketId(ticketId: string): CocUpdateChangeRequestBodySubTickets {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withChangeResult(changeResult: string): CocUpdateChangeRequestBodySubTickets {
        this['change_result'] = changeResult;
        return this;
    }
    public set changeResult(changeResult: string  | undefined) {
        this['change_result'] = changeResult;
    }
    public get changeResult(): string | undefined {
        return this['change_result'];
    }
    public withIsVerifiedInChangeTime(isVerifiedInChangeTime: boolean): CocUpdateChangeRequestBodySubTickets {
        this['is_verified_in_change_time'] = isVerifiedInChangeTime;
        return this;
    }
    public set isVerifiedInChangeTime(isVerifiedInChangeTime: boolean  | undefined) {
        this['is_verified_in_change_time'] = isVerifiedInChangeTime;
    }
    public get isVerifiedInChangeTime(): boolean | undefined {
        return this['is_verified_in_change_time'];
    }
    public withVerifiedDocs(verifiedDocs: string): CocUpdateChangeRequestBodySubTickets {
        this['verified_docs'] = verifiedDocs;
        return this;
    }
    public set verifiedDocs(verifiedDocs: string  | undefined) {
        this['verified_docs'] = verifiedDocs;
    }
    public get verifiedDocs(): string | undefined {
        return this['verified_docs'];
    }
    public withComment(comment: string): CocUpdateChangeRequestBodySubTickets {
        this['comment'] = comment;
        return this;
    }
    public withChangeFailType(changeFailType: string): CocUpdateChangeRequestBodySubTickets {
        this['change_fail_type'] = changeFailType;
        return this;
    }
    public set changeFailType(changeFailType: string  | undefined) {
        this['change_fail_type'] = changeFailType;
    }
    public get changeFailType(): string | undefined {
        return this['change_fail_type'];
    }
    public withRollbackStartTime(rollbackStartTime: number): CocUpdateChangeRequestBodySubTickets {
        this['rollback_start_time'] = rollbackStartTime;
        return this;
    }
    public set rollbackStartTime(rollbackStartTime: number  | undefined) {
        this['rollback_start_time'] = rollbackStartTime;
    }
    public get rollbackStartTime(): number | undefined {
        return this['rollback_start_time'];
    }
    public withRollbackEndTime(rollbackEndTime: number): CocUpdateChangeRequestBodySubTickets {
        this['rollback_end_time'] = rollbackEndTime;
        return this;
    }
    public set rollbackEndTime(rollbackEndTime: number  | undefined) {
        this['rollback_end_time'] = rollbackEndTime;
    }
    public get rollbackEndTime(): number | undefined {
        return this['rollback_end_time'];
    }
    public withIsRollbackSuccess(isRollbackSuccess: boolean): CocUpdateChangeRequestBodySubTickets {
        this['is_rollback_success'] = isRollbackSuccess;
        return this;
    }
    public set isRollbackSuccess(isRollbackSuccess: boolean  | undefined) {
        this['is_rollback_success'] = isRollbackSuccess;
    }
    public get isRollbackSuccess(): boolean | undefined {
        return this['is_rollback_success'];
    }
    public withIsMonitorFound(isMonitorFound: boolean): CocUpdateChangeRequestBodySubTickets {
        this['is_monitor_found'] = isMonitorFound;
        return this;
    }
    public set isMonitorFound(isMonitorFound: boolean  | undefined) {
        this['is_monitor_found'] = isMonitorFound;
    }
    public get isMonitorFound(): boolean | undefined {
        return this['is_monitor_found'];
    }
}