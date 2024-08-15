import { ExectionInstanceModel } from './ExectionInstanceModel';


export class JobScriptBatchDetailModel {
    private 'batch_index'?: number;
    private 'total_instances'?: number;
    private 'execute_instances'?: Array<ExectionInstanceModel>;
    public constructor() { 
    }
    public withBatchIndex(batchIndex: number): JobScriptBatchDetailModel {
        this['batch_index'] = batchIndex;
        return this;
    }
    public set batchIndex(batchIndex: number  | undefined) {
        this['batch_index'] = batchIndex;
    }
    public get batchIndex(): number | undefined {
        return this['batch_index'];
    }
    public withTotalInstances(totalInstances: number): JobScriptBatchDetailModel {
        this['total_instances'] = totalInstances;
        return this;
    }
    public set totalInstances(totalInstances: number  | undefined) {
        this['total_instances'] = totalInstances;
    }
    public get totalInstances(): number | undefined {
        return this['total_instances'];
    }
    public withExecuteInstances(executeInstances: Array<ExectionInstanceModel>): JobScriptBatchDetailModel {
        this['execute_instances'] = executeInstances;
        return this;
    }
    public set executeInstances(executeInstances: Array<ExectionInstanceModel>  | undefined) {
        this['execute_instances'] = executeInstances;
    }
    public get executeInstances(): Array<ExectionInstanceModel> | undefined {
        return this['execute_instances'];
    }
}