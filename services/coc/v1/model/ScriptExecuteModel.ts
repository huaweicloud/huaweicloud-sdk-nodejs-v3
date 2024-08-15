import { ExecuteInstancesBatchInfo } from './ExecuteInstancesBatchInfo';
import { ScriptExecuteParam } from './ScriptExecuteParam';


export class ScriptExecuteModel {
    private 'execute_param'?: ScriptExecuteParam;
    private 'execute_batches'?: Array<ExecuteInstancesBatchInfo>;
    public constructor(executeParam?: ScriptExecuteParam, executeBatches?: Array<ExecuteInstancesBatchInfo>) { 
        this['execute_param'] = executeParam;
        this['execute_batches'] = executeBatches;
    }
    public withExecuteParam(executeParam: ScriptExecuteParam): ScriptExecuteModel {
        this['execute_param'] = executeParam;
        return this;
    }
    public set executeParam(executeParam: ScriptExecuteParam  | undefined) {
        this['execute_param'] = executeParam;
    }
    public get executeParam(): ScriptExecuteParam | undefined {
        return this['execute_param'];
    }
    public withExecuteBatches(executeBatches: Array<ExecuteInstancesBatchInfo>): ScriptExecuteModel {
        this['execute_batches'] = executeBatches;
        return this;
    }
    public set executeBatches(executeBatches: Array<ExecuteInstancesBatchInfo>  | undefined) {
        this['execute_batches'] = executeBatches;
    }
    public get executeBatches(): Array<ExecuteInstancesBatchInfo> | undefined {
        return this['execute_batches'];
    }
}