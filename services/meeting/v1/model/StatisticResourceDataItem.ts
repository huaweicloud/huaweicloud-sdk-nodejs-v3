

export class StatisticResourceDataItem {
    public time?: string;
    public vmrParties?: string;
    public maxConcurrencyVmrCount?: string;
    public livePortUsedCount?: string;
    public recordUsedSize?: string;
    public pstnUsedDuration?: string;
    public constructor() { 
    }
    public withTime(time: string): StatisticResourceDataItem {
        this['time'] = time;
        return this;
    }
    public withVmrParties(vmrParties: string): StatisticResourceDataItem {
        this['vmrParties'] = vmrParties;
        return this;
    }
    public withMaxConcurrencyVmrCount(maxConcurrencyVmrCount: string): StatisticResourceDataItem {
        this['maxConcurrencyVmrCount'] = maxConcurrencyVmrCount;
        return this;
    }
    public withLivePortUsedCount(livePortUsedCount: string): StatisticResourceDataItem {
        this['livePortUsedCount'] = livePortUsedCount;
        return this;
    }
    public withRecordUsedSize(recordUsedSize: string): StatisticResourceDataItem {
        this['recordUsedSize'] = recordUsedSize;
        return this;
    }
    public withPstnUsedDuration(pstnUsedDuration: string): StatisticResourceDataItem {
        this['pstnUsedDuration'] = pstnUsedDuration;
        return this;
    }
}