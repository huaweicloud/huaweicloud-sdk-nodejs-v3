import { PrecheckFailSubJobResult } from './PrecheckFailSubJobResult';


export class PrecheckResult {
    public item?: string;
    public result?: PrecheckResultResultEnum;
    private 'failed_reason'?: string | undefined;
    public data?: string;
    private 'raw_error_msg'?: string | undefined;
    public group?: string;
    private 'is_support_skip'?: boolean | undefined;
    private 'is_skipped'?: boolean | undefined;
    private 'failed_sub_jobs'?: Array<PrecheckFailSubJobResult> | undefined;
    public constructor() { 
    }
    public withItem(item: string): PrecheckResult {
        this['item'] = item;
        return this;
    }
    public withResult(result: PrecheckResultResultEnum): PrecheckResult {
        this['result'] = result;
        return this;
    }
    public withFailedReason(failedReason: string): PrecheckResult {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason() {
        return this['failed_reason'];
    }
    public withData(data: string): PrecheckResult {
        this['data'] = data;
        return this;
    }
    public withRawErrorMsg(rawErrorMsg: string): PrecheckResult {
        this['raw_error_msg'] = rawErrorMsg;
        return this;
    }
    public set rawErrorMsg(rawErrorMsg: string | undefined) {
        this['raw_error_msg'] = rawErrorMsg;
    }
    public get rawErrorMsg() {
        return this['raw_error_msg'];
    }
    public withGroup(group: string): PrecheckResult {
        this['group'] = group;
        return this;
    }
    public withIsSupportSkip(isSupportSkip: boolean): PrecheckResult {
        this['is_support_skip'] = isSupportSkip;
        return this;
    }
    public set isSupportSkip(isSupportSkip: boolean | undefined) {
        this['is_support_skip'] = isSupportSkip;
    }
    public get isSupportSkip() {
        return this['is_support_skip'];
    }
    public withIsSkipped(isSkipped: boolean): PrecheckResult {
        this['is_skipped'] = isSkipped;
        return this;
    }
    public set isSkipped(isSkipped: boolean | undefined) {
        this['is_skipped'] = isSkipped;
    }
    public get isSkipped() {
        return this['is_skipped'];
    }
    public withFailedSubJobs(failedSubJobs: Array<PrecheckFailSubJobResult>): PrecheckResult {
        this['failed_sub_jobs'] = failedSubJobs;
        return this;
    }
    public set failedSubJobs(failedSubJobs: Array<PrecheckFailSubJobResult> | undefined) {
        this['failed_sub_jobs'] = failedSubJobs;
    }
    public get failedSubJobs() {
        return this['failed_sub_jobs'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrecheckResultResultEnum {
    PASSED = 'PASSED',
    ALARM = 'ALARM',
    FAILED = 'FAILED'
}
