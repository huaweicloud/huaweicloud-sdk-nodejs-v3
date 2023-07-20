import { WorkloadQueue } from './WorkloadQueue';


export class WorkloadQueueReq {
    private 'workload_queue'?: WorkloadQueue;
    public constructor(workloadQueue?: WorkloadQueue) { 
        this['workload_queue'] = workloadQueue;
    }
    public withWorkloadQueue(workloadQueue: WorkloadQueue): WorkloadQueueReq {
        this['workload_queue'] = workloadQueue;
        return this;
    }
    public set workloadQueue(workloadQueue: WorkloadQueue  | undefined) {
        this['workload_queue'] = workloadQueue;
    }
    public get workloadQueue(): WorkloadQueue | undefined {
        return this['workload_queue'];
    }
}