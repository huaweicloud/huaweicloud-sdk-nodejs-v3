import { Allocated } from './Allocated';
import { Available } from './Available';
import { Capacity } from './Capacity';
import { WorkloadInfo } from './WorkloadInfo';


export class MetricTableItem {
    public allocated?: Allocated;
    public capacity?: Capacity;
    public available?: Available;
    public workload?: WorkloadInfo;
    public constructor() { 
    }
    public withAllocated(allocated: Allocated): MetricTableItem {
        this['allocated'] = allocated;
        return this;
    }
    public withCapacity(capacity: Capacity): MetricTableItem {
        this['capacity'] = capacity;
        return this;
    }
    public withAvailable(available: Available): MetricTableItem {
        this['available'] = available;
        return this;
    }
    public withWorkload(workload: WorkloadInfo): MetricTableItem {
        this['workload'] = workload;
        return this;
    }
}