import { WorkloadResourceQueue } from './WorkloadResourceQueue';


export class UpdateWorkloadQueueReq {
    private 'workload_queue'?: WorkloadResourceQueue;
    public constructor(workloadQueue?: WorkloadResourceQueue) { 
        this['workload_queue'] = workloadQueue;
    }
    public withWorkloadQueue(workloadQueue: WorkloadResourceQueue): UpdateWorkloadQueueReq {
        this['workload_queue'] = workloadQueue;
        return this;
    }
    public set workloadQueue(workloadQueue: WorkloadResourceQueue  | undefined) {
        this['workload_queue'] = workloadQueue;
    }
    public get workloadQueue(): WorkloadResourceQueue | undefined {
        return this['workload_queue'];
    }
}