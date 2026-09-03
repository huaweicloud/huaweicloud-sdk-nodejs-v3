import { WorkloadStatisticsInfo } from './WorkloadStatisticsInfo';


export class WorkloadInfo {
    public allocated?: WorkloadStatisticsInfo;
    public queue?: WorkloadStatisticsInfo;
    public timestamp?: string;
    public window?: string;
    public constructor() { 
    }
    public withAllocated(allocated: WorkloadStatisticsInfo): WorkloadInfo {
        this['allocated'] = allocated;
        return this;
    }
    public withQueue(queue: WorkloadStatisticsInfo): WorkloadInfo {
        this['queue'] = queue;
        return this;
    }
    public withTimestamp(timestamp: string): WorkloadInfo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withWindow(window: string): WorkloadInfo {
        this['window'] = window;
        return this;
    }
}