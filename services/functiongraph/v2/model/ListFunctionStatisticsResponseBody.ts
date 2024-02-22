import { SlaReportsValue } from './SlaReportsValue';


export class ListFunctionStatisticsResponseBody {
    public count?: Array<SlaReportsValue>;
    public duration?: Array<SlaReportsValue>;
    private 'fail_count'?: Array<SlaReportsValue>;
    private 'max_duration'?: Array<SlaReportsValue>;
    private 'min_duration'?: Array<SlaReportsValue>;
    private 'reject_count'?: Array<SlaReportsValue>;
    private 'function_error_count'?: Array<SlaReportsValue>;
    private 'system_error_count'?: Array<SlaReportsValue>;
    private 'reserved_instance_num'?: Array<SlaReportsValue>;
    private 'concurrency_num'?: Array<SlaReportsValue>;
    public constructor() { 
    }
    public withCount(count: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['count'] = count;
        return this;
    }
    public withDuration(duration: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['duration'] = duration;
        return this;
    }
    public withFailCount(failCount: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: Array<SlaReportsValue>  | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount(): Array<SlaReportsValue> | undefined {
        return this['fail_count'];
    }
    public withMaxDuration(maxDuration: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['max_duration'] = maxDuration;
        return this;
    }
    public set maxDuration(maxDuration: Array<SlaReportsValue>  | undefined) {
        this['max_duration'] = maxDuration;
    }
    public get maxDuration(): Array<SlaReportsValue> | undefined {
        return this['max_duration'];
    }
    public withMinDuration(minDuration: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['min_duration'] = minDuration;
        return this;
    }
    public set minDuration(minDuration: Array<SlaReportsValue>  | undefined) {
        this['min_duration'] = minDuration;
    }
    public get minDuration(): Array<SlaReportsValue> | undefined {
        return this['min_duration'];
    }
    public withRejectCount(rejectCount: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['reject_count'] = rejectCount;
        return this;
    }
    public set rejectCount(rejectCount: Array<SlaReportsValue>  | undefined) {
        this['reject_count'] = rejectCount;
    }
    public get rejectCount(): Array<SlaReportsValue> | undefined {
        return this['reject_count'];
    }
    public withFunctionErrorCount(functionErrorCount: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['function_error_count'] = functionErrorCount;
        return this;
    }
    public set functionErrorCount(functionErrorCount: Array<SlaReportsValue>  | undefined) {
        this['function_error_count'] = functionErrorCount;
    }
    public get functionErrorCount(): Array<SlaReportsValue> | undefined {
        return this['function_error_count'];
    }
    public withSystemErrorCount(systemErrorCount: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['system_error_count'] = systemErrorCount;
        return this;
    }
    public set systemErrorCount(systemErrorCount: Array<SlaReportsValue>  | undefined) {
        this['system_error_count'] = systemErrorCount;
    }
    public get systemErrorCount(): Array<SlaReportsValue> | undefined {
        return this['system_error_count'];
    }
    public withReservedInstanceNum(reservedInstanceNum: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['reserved_instance_num'] = reservedInstanceNum;
        return this;
    }
    public set reservedInstanceNum(reservedInstanceNum: Array<SlaReportsValue>  | undefined) {
        this['reserved_instance_num'] = reservedInstanceNum;
    }
    public get reservedInstanceNum(): Array<SlaReportsValue> | undefined {
        return this['reserved_instance_num'];
    }
    public withConcurrencyNum(concurrencyNum: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['concurrency_num'] = concurrencyNum;
        return this;
    }
    public set concurrencyNum(concurrencyNum: Array<SlaReportsValue>  | undefined) {
        this['concurrency_num'] = concurrencyNum;
    }
    public get concurrencyNum(): Array<SlaReportsValue> | undefined {
        return this['concurrency_num'];
    }
}