import { WorkloadQueueInfo } from './WorkloadQueueInfo';


export class WorkloadQueueRequest {
    private 'workload_queue'?: WorkloadQueueInfo;
    public constructor(workloadQueue?: WorkloadQueueInfo) { 
        this['workload_queue'] = workloadQueue;
    }
    public withWorkloadQueue(workloadQueue: WorkloadQueueInfo): WorkloadQueueRequest {
        this['workload_queue'] = workloadQueue;
        return this;
    }
    public set workloadQueue(workloadQueue: WorkloadQueueInfo  | undefined) {
        this['workload_queue'] = workloadQueue;
    }
    public get workloadQueue(): WorkloadQueueInfo | undefined {
        return this['workload_queue'];
    }
}