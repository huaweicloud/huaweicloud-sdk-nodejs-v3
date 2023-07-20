import { PrecheckFailSubJobVO } from './PrecheckFailSubJobVO';


export class PrecheckResult {
    public item?: string;
    public result?: PrecheckResultResultEnum | string;
    private 'failed_reason'?: string;
    public data?: string;
    private 'raw_error_msg'?: string;
    public group?: string;
    private 'failed_sub_jobs'?: Array<PrecheckFailSubJobVO>;
    public constructor() { 
    }
    public withItem(item: string): PrecheckResult {
        this['item'] = item;
        return this;
    }
    public withResult(result: PrecheckResultResultEnum | string): PrecheckResult {
        this['result'] = result;
        return this;
    }
    public withFailedReason(failedReason: string): PrecheckResult {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
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
    public set rawErrorMsg(rawErrorMsg: string  | undefined) {
        this['raw_error_msg'] = rawErrorMsg;
    }
    public get rawErrorMsg(): string | undefined {
        return this['raw_error_msg'];
    }
    public withGroup(group: string): PrecheckResult {
        this['group'] = group;
        return this;
    }
    public withFailedSubJobs(failedSubJobs: Array<PrecheckFailSubJobVO>): PrecheckResult {
        this['failed_sub_jobs'] = failedSubJobs;
        return this;
    }
    public set failedSubJobs(failedSubJobs: Array<PrecheckFailSubJobVO>  | undefined) {
        this['failed_sub_jobs'] = failedSubJobs;
    }
    public get failedSubJobs(): Array<PrecheckFailSubJobVO> | undefined {
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
