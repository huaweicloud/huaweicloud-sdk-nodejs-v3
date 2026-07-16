import { Allocated } from './Allocated';
import { Capacity } from './Capacity';


export class MetricTableItem {
    public allocated?: Allocated;
    public capacity?: Capacity;
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
}