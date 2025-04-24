

export class EventPubMetricsItem {
    private 'event_size'?: number;
    public timestamp?: number;
    public num?: number;
    private 'success_num'?: number;
    private 'process_time'?: number;
    private 'invoke_time'?: number;
    public constructor() { 
    }
    public withEventSize(eventSize: number): EventPubMetricsItem {
        this['event_size'] = eventSize;
        return this;
    }
    public set eventSize(eventSize: number  | undefined) {
        this['event_size'] = eventSize;
    }
    public get eventSize(): number | undefined {
        return this['event_size'];
    }
    public withTimestamp(timestamp: number): EventPubMetricsItem {
        this['timestamp'] = timestamp;
        return this;
    }
    public withNum(num: number): EventPubMetricsItem {
        this['num'] = num;
        return this;
    }
    public withSuccessNum(successNum: number): EventPubMetricsItem {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withProcessTime(processTime: number): EventPubMetricsItem {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): number | undefined {
        return this['process_time'];
    }
    public withInvokeTime(invokeTime: number): EventPubMetricsItem {
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