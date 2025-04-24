

export class EventSubMetricsItem {
    private 'fail_num'?: number;
    private 'retry_success_num'?: number;
    private 'retry_fail_num'?: number;
    private 'retry_times'?: number;
    public timestamp?: number;
    public num?: number;
    private 'success_num'?: number;
    private 'process_time'?: number;
    private 'invoke_time'?: number;
    public constructor() { 
    }
    public withFailNum(failNum: number): EventSubMetricsItem {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withRetrySuccessNum(retrySuccessNum: number): EventSubMetricsItem {
        this['retry_success_num'] = retrySuccessNum;
        return this;
    }
    public set retrySuccessNum(retrySuccessNum: number  | undefined) {
        this['retry_success_num'] = retrySuccessNum;
    }
    public get retrySuccessNum(): number | undefined {
        return this['retry_success_num'];
    }
    public withRetryFailNum(retryFailNum: number): EventSubMetricsItem {
        this['retry_fail_num'] = retryFailNum;
        return this;
    }
    public set retryFailNum(retryFailNum: number  | undefined) {
        this['retry_fail_num'] = retryFailNum;
    }
    public get retryFailNum(): number | undefined {
        return this['retry_fail_num'];
    }
    public withRetryTimes(retryTimes: number): EventSubMetricsItem {
        this['retry_times'] = retryTimes;
        return this;
    }
    public set retryTimes(retryTimes: number  | undefined) {
        this['retry_times'] = retryTimes;
    }
    public get retryTimes(): number | undefined {
        return this['retry_times'];
    }
    public withTimestamp(timestamp: number): EventSubMetricsItem {
        this['timestamp'] = timestamp;
        return this;
    }
    public withNum(num: number): EventSubMetricsItem {
        this['num'] = num;
        return this;
    }
    public withSuccessNum(successNum: number): EventSubMetricsItem {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withProcessTime(processTime: number): EventSubMetricsItem {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): number | undefined {
        return this['process_time'];
    }
    public withInvokeTime(invokeTime: number): EventSubMetricsItem {
        this['invoke_time'] = invokeTime;
        return this;
    }
    public set invokeTime(invokeTime: number  | undefined) {
        this['invoke_time'] = invokeTime;
    }
    public get invokeTime(): number | undefined {
        return this['invoke_time'];
    }
}