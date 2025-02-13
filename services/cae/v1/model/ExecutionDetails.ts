import { ComponentExecutionResult } from './ComponentExecutionResult';


export class ExecutionDetails {
    private 'last_execution_time'?: string;
    public items?: Array<ComponentExecutionResult>;
    public constructor() { 
    }
    public withLastExecutionTime(lastExecutionTime: string): ExecutionDetails {
        this['last_execution_time'] = lastExecutionTime;
        return this;
    }
    public set lastExecutionTime(lastExecutionTime: string  | undefined) {
        this['last_execution_time'] = lastExecutionTime;
    }
    public get lastExecutionTime(): string | undefined {
        return this['last_execution_time'];
    }
    public withItems(items: Array<ComponentExecutionResult>): ExecutionDetails {
        this['items'] = items;
        return this;
    }
}