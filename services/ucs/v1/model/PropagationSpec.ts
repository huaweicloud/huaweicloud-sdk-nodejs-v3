import { Placement } from './Placement';
import { ResourceSelector } from './ResourceSelector';


export class PropagationSpec {
    public resourceSelectors?: Array<ResourceSelector>;
    public propagateDeps?: boolean;
    public placement?: Placement;
    public priority?: number;
    public schedulerName?: string;
    public constructor() { 
    }
    public withResourceSelectors(resourceSelectors: Array<ResourceSelector>): PropagationSpec {
        this['resourceSelectors'] = resourceSelectors;
        return this;
    }
    public withPropagateDeps(propagateDeps: boolean): PropagationSpec {
        this['propagateDeps'] = propagateDeps;
        return this;
    }
    public withPlacement(placement: Placement): PropagationSpec {
        this['placement'] = placement;
        return this;
    }
    public withPriority(priority: number): PropagationSpec {
        this['priority'] = priority;
        return this;
    }
    public withSchedulerName(schedulerName: string): PropagationSpec {
        this['schedulerName'] = schedulerName;
        return this;
    }
}