import { SlaReportsValue } from './SlaReportsValue';


export class ListFunctionStatisticsResponseBody {
    public count?: Array<SlaReportsValue>;
    public duration?: Array<SlaReportsValue>;
    private 'fail_count'?: Array<SlaReportsValue> | undefined;
    private 'max_duration'?: Array<SlaReportsValue> | undefined;
    private 'min_duration'?: Array<SlaReportsValue> | undefined;
    private 'reject_count'?: Array<SlaReportsValue> | undefined;
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
    public set failCount(failCount: Array<SlaReportsValue> | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount() {
        return this['fail_count'];
    }
    public withMaxDuration(maxDuration: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['max_duration'] = maxDuration;
        return this;
    }
    public set maxDuration(maxDuration: Array<SlaReportsValue> | undefined) {
        this['max_duration'] = maxDuration;
    }
    public get maxDuration() {
        return this['max_duration'];
    }
    public withMinDuration(minDuration: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['min_duration'] = minDuration;
        return this;
    }
    public set minDuration(minDuration: Array<SlaReportsValue> | undefined) {
        this['min_duration'] = minDuration;
    }
    public get minDuration() {
        return this['min_duration'];
    }
    public withRejectCount(rejectCount: Array<SlaReportsValue>): ListFunctionStatisticsResponseBody {
        this['reject_count'] = rejectCount;
        return this;
    }
    public set rejectCount(rejectCount: Array<SlaReportsValue> | undefined) {
        this['reject_count'] = rejectCount;
    }
    public get rejectCount() {
        return this['reject_count'];
    }
}