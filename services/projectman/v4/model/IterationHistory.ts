import { IterationHistoryDetails } from './IterationHistoryDetails';
import { IterationHistoryOperator } from './IterationHistoryOperator';


export class IterationHistory {
    private 'iteration_id'?: string;
    private 'project_id'?: string;
    public operator?: IterationHistoryOperator;
    public operate?: string;
    private 'operate_time'?: string;
    public details?: Array<IterationHistoryDetails>;
    public constructor() { 
    }
    public withIterationId(iterationId: string): IterationHistory {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: string  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): string | undefined {
        return this['iteration_id'];
    }
    public withProjectId(projectId: string): IterationHistory {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOperator(operator: IterationHistoryOperator): IterationHistory {
        this['operator'] = operator;
        return this;
    }
    public withOperate(operate: string): IterationHistory {
        this['operate'] = operate;
        return this;
    }
    public withOperateTime(operateTime: string): IterationHistory {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
    public withDetails(details: Array<IterationHistoryDetails>): IterationHistory {
        this['details'] = details;
        return this;
    }
}