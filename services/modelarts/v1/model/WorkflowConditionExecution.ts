import { WorkflowMetricPair } from './WorkflowMetricPair';


export class WorkflowConditionExecution {
    public result?: string;
    private 'metric_list'?: Array<WorkflowMetricPair>;
    public constructor() { 
    }
    public withResult(result: string): WorkflowConditionExecution {
        this['result'] = result;
        return this;
    }
    public withMetricList(metricList: Array<WorkflowMetricPair>): WorkflowConditionExecution {
        this['metric_list'] = metricList;
        return this;
    }
    public set metricList(metricList: Array<WorkflowMetricPair>  | undefined) {
        this['metric_list'] = metricList;
    }
    public get metricList(): Array<WorkflowMetricPair> | undefined {
        return this['metric_list'];
    }
}