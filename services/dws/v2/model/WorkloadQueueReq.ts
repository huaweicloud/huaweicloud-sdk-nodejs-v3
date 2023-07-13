import { WorkloadQueue } from './WorkloadQueue';


export class WorkloadQueueReq {
    private 'workload_queue': WorkloadQueue | undefined;
    public constructor(workloadQueue?: any) { 
        this['workload_queue'] = workloadQueue;
    }
    public withWorkloadQueue(workloadQueue: WorkloadQueue): WorkloadQueueReq {
        this['workload_queue'] = workloadQueue;
        return this;
    }
    public set workloadQueue(workloadQueue: WorkloadQueue | undefined) {
        this['workload_queue'] = workloadQueue;
    }
    public get workloadQueue() {
        return this['workload_queue'];
    }
}