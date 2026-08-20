import { ShowIpdProcessInstancesResponseResultProcessInstances } from './ShowIpdProcessInstancesResponseResultProcessInstances';


export class ShowIpdProcessInstancesResponseResult {
    public total?: number;
    private 'process_instances'?: Array<ShowIpdProcessInstancesResponseResultProcessInstances>;
    public constructor() { 
    }
    public withTotal(total: number): ShowIpdProcessInstancesResponseResult {
        this['total'] = total;
        return this;
    }
    public withProcessInstances(processInstances: Array<ShowIpdProcessInstancesResponseResultProcessInstances>): ShowIpdProcessInstancesResponseResult {
        this['process_instances'] = processInstances;
        return this;
    }
    public set processInstances(processInstances: Array<ShowIpdProcessInstancesResponseResultProcessInstances>  | undefined) {
        this['process_instances'] = processInstances;
    }
    public get processInstances(): Array<ShowIpdProcessInstancesResponseResultProcessInstances> | undefined {
        return this['process_instances'];
    }
}