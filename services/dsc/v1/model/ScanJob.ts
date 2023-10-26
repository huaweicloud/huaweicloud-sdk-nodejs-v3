

export class ScanJob {
    public id?: string;
    public name?: string;
    private 'rule_groups'?: Array<string>;
    public cycle?: ScanJobCycleEnum | string;
    public status?: ScanJobStatusEnum | string;
    private 'last_run_time'?: number;
    private 'create_time'?: number;
    private 'last_scan_risk'?: string;
    private 'use_nlp'?: boolean;
    public open?: boolean;
    private 'topic_urn'?: string;
    private 'start_time'?: number;
    public constructor() { 
    }
    public withId(id: string): ScanJob {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScanJob {
        this['name'] = name;
        return this;
    }
    public withRuleGroups(ruleGroups: Array<string>): ScanJob {
        this['rule_groups'] = ruleGroups;
        return this;
    }
    public set ruleGroups(ruleGroups: Array<string>  | undefined) {
        this['rule_groups'] = ruleGroups;
    }
    public get ruleGroups(): Array<string> | undefined {
        return this['rule_groups'];
    }
    public withCycle(cycle: ScanJobCycleEnum | string): ScanJob {
        this['cycle'] = cycle;
        return this;
    }
    public withStatus(status: ScanJobStatusEnum | string): ScanJob {
        this['status'] = status;
        return this;
    }
    public withLastRunTime(lastRunTime: number): ScanJob {
        this['last_run_time'] = lastRunTime;
        return this;
    }
    public set lastRunTime(lastRunTime: number  | undefined) {
        this['last_run_time'] = lastRunTime;
    }
    public get lastRunTime(): number | undefined {
        return this['last_run_time'];
    }
    public withCreateTime(createTime: number): ScanJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastScanRisk(lastScanRisk: string): ScanJob {
        this['last_scan_risk'] = lastScanRisk;
        return this;
    }
    public set lastScanRisk(lastScanRisk: string  | undefined) {
        this['last_scan_risk'] = lastScanRisk;
    }
    public get lastScanRisk(): string | undefined {
        return this['last_scan_risk'];
    }
    public withUseNlp(useNlp: boolean): ScanJob {
        this['use_nlp'] = useNlp;
        return this;
    }
    public set useNlp(useNlp: boolean  | undefined) {
        this['use_nlp'] = useNlp;
    }
    public get useNlp(): boolean | undefined {
        return this['use_nlp'];
    }
    public withOpen(open: boolean): ScanJob {
        this['open'] = open;
        return this;
    }
    public withTopicUrn(topicUrn: string): ScanJob {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withStartTime(startTime: number): ScanJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScanJobCycleEnum {
    ONCE = 'ONCE',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}
/**
    * @export
    * @enum {string}
    */
export enum ScanJobStatusEnum {
    INIT = 'INIT',
    WAITING = 'WAITING',
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    STOPPED = 'STOPPED',
    FINISHED = 'FINISHED',
    TERMINATED = 'TERMINATED'
}
