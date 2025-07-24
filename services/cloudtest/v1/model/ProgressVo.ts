

export class ProgressVo {
    public uri?: string;
    public name?: string;
    public total?: number;
    public completed?: boolean;
    public cancelled?: boolean;
    public informations?: Array<string>;
    public code?: string;
    public reason?: string;
    private 'submitted_time'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'server_ip'?: string;
    private 'last_modified_time'?: number;
    private 'finished_count'?: number;
    private 'return_value'?: object;
    private 'exception_message'?: string;
    private 'line_up_num'?: number;
    private 'asyn_operation_key'?: string;
    private 'is_ended'?: boolean;
    private 'finished_percent'?: number;
    public constructor() { 
    }
    public withUri(uri: string): ProgressVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): ProgressVo {
        this['name'] = name;
        return this;
    }
    public withTotal(total: number): ProgressVo {
        this['total'] = total;
        return this;
    }
    public withCompleted(completed: boolean): ProgressVo {
        this['completed'] = completed;
        return this;
    }
    public withCancelled(cancelled: boolean): ProgressVo {
        this['cancelled'] = cancelled;
        return this;
    }
    public withInformations(informations: Array<string>): ProgressVo {
        this['informations'] = informations;
        return this;
    }
    public withCode(code: string): ProgressVo {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): ProgressVo {
        this['reason'] = reason;
        return this;
    }
    public withSubmittedTime(submittedTime: string): ProgressVo {
        this['submitted_time'] = submittedTime;
        return this;
    }
    public set submittedTime(submittedTime: string  | undefined) {
        this['submitted_time'] = submittedTime;
    }
    public get submittedTime(): string | undefined {
        return this['submitted_time'];
    }
    public withBeginTime(beginTime: string): ProgressVo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ProgressVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withServerIp(serverIp: string): ProgressVo {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withLastModifiedTime(lastModifiedTime: number): ProgressVo {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: number  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): number | undefined {
        return this['last_modified_time'];
    }
    public withFinishedCount(finishedCount: number): ProgressVo {
        this['finished_count'] = finishedCount;
        return this;
    }
    public set finishedCount(finishedCount: number  | undefined) {
        this['finished_count'] = finishedCount;
    }
    public get finishedCount(): number | undefined {
        return this['finished_count'];
    }
    public withReturnValue(returnValue: object): ProgressVo {
        this['return_value'] = returnValue;
        return this;
    }
    public set returnValue(returnValue: object  | undefined) {
        this['return_value'] = returnValue;
    }
    public get returnValue(): object | undefined {
        return this['return_value'];
    }
    public withExceptionMessage(exceptionMessage: string): ProgressVo {
        this['exception_message'] = exceptionMessage;
        return this;
    }
    public set exceptionMessage(exceptionMessage: string  | undefined) {
        this['exception_message'] = exceptionMessage;
    }
    public get exceptionMessage(): string | undefined {
        return this['exception_message'];
    }
    public withLineUpNum(lineUpNum: number): ProgressVo {
        this['line_up_num'] = lineUpNum;
        return this;
    }
    public set lineUpNum(lineUpNum: number  | undefined) {
        this['line_up_num'] = lineUpNum;
    }
    public get lineUpNum(): number | undefined {
        return this['line_up_num'];
    }
    public withAsynOperationKey(asynOperationKey: string): ProgressVo {
        this['asyn_operation_key'] = asynOperationKey;
        return this;
    }
    public set asynOperationKey(asynOperationKey: string  | undefined) {
        this['asyn_operation_key'] = asynOperationKey;
    }
    public get asynOperationKey(): string | undefined {
        return this['asyn_operation_key'];
    }
    public withIsEnded(isEnded: boolean): ProgressVo {
        this['is_ended'] = isEnded;
        return this;
    }
    public set isEnded(isEnded: boolean  | undefined) {
        this['is_ended'] = isEnded;
    }
    public get isEnded(): boolean | undefined {
        return this['is_ended'];
    }
    public withFinishedPercent(finishedPercent: number): ProgressVo {
        this['finished_percent'] = finishedPercent;
        return this;
    }
    public set finishedPercent(finishedPercent: number  | undefined) {
        this['finished_percent'] = finishedPercent;
    }
    public get finishedPercent(): number | undefined {
        return this['finished_percent'];
    }
}