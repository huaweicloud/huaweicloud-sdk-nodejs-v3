

export class ListCollectConfigResponseBodyAccounts {
    private 'account_id'?: string;
    private 'last_log_date'?: number;
    private 'log_count'?: string;
    public name?: string;
    private 'process_status'?: string;
    private 'sink_msg'?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): ListCollectConfigResponseBodyAccounts {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withLastLogDate(lastLogDate: number): ListCollectConfigResponseBodyAccounts {
        this['last_log_date'] = lastLogDate;
        return this;
    }
    public set lastLogDate(lastLogDate: number  | undefined) {
        this['last_log_date'] = lastLogDate;
    }
    public get lastLogDate(): number | undefined {
        return this['last_log_date'];
    }
    public withLogCount(logCount: string): ListCollectConfigResponseBodyAccounts {
        this['log_count'] = logCount;
        return this;
    }
    public set logCount(logCount: string  | undefined) {
        this['log_count'] = logCount;
    }
    public get logCount(): string | undefined {
        return this['log_count'];
    }
    public withName(name: string): ListCollectConfigResponseBodyAccounts {
        this['name'] = name;
        return this;
    }
    public withProcessStatus(processStatus: string): ListCollectConfigResponseBodyAccounts {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withSinkMsg(sinkMsg: string): ListCollectConfigResponseBodyAccounts {
        this['sink_msg'] = sinkMsg;
        return this;
    }
    public set sinkMsg(sinkMsg: string  | undefined) {
        this['sink_msg'] = sinkMsg;
    }
    public get sinkMsg(): string | undefined {
        return this['sink_msg'];
    }
}