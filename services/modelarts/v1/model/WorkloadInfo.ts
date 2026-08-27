import { WorkloadStatistics } from './WorkloadStatistics';


export class WorkloadInfo {
    public allocated?: WorkloadStatistics;
    public queue?: WorkloadStatistics;
    public timestamp?: string;
    public window?: string;
    public constructor() { 
    }
    public withAllocated(allocated: WorkloadStatistics): WorkloadInfo {
        this['allocated'] = allocated;
        return this;
    }
    public withQueue(queue: WorkloadStatistics): WorkloadInfo {
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