import { WorkflowMetricPairResp } from './WorkflowMetricPairResp';


export class WorkflowConditionExecutionResp {
    public result?: string;
    private 'metric_list'?: Array<WorkflowMetricPairResp>;
    public constructor() { 
    }
    public withResult(result: string): WorkflowConditionExecutionResp {
        this['result'] = result;
        return this;
    }
    public withMetricList(metricList: Array<WorkflowMetricPairResp>): WorkflowConditionExecutionResp {
        this['metric_list'] = metricList;
        return this;
    }
    public set metricList(metricList: Array<WorkflowMetricPairResp>  | undefined) {
        this['metric_list'] = metricList;
    }
    public get metricList(): Array<WorkflowMetricPairResp> | undefined {
        return this['metric_list'];
    }
}