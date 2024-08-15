import { ScriptExecuteParam } from './ScriptExecuteParam';


export class JobScriptOrderInfoProp {
    private 'script_uuid'?: string;
    private 'script_name'?: string;
    private 'script_version_uuid'?: number;
    private 'script_version_name'?: string;
    private 'current_execute_batch_index'?: number;
    private 'execute_param'?: ScriptExecuteParam;
    public constructor() { 
    }
    public withScriptUuid(scriptUuid: string): JobScriptOrderInfoProp {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withScriptName(scriptName: string): JobScriptOrderInfoProp {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptVersionUuid(scriptVersionUuid: number): JobScriptOrderInfoProp {
        this['script_version_uuid'] = scriptVersionUuid;
        return this;
    }
    public set scriptVersionUuid(scriptVersionUuid: number  | undefined) {
        this['script_version_uuid'] = scriptVersionUuid;
    }
    public get scriptVersionUuid(): number | undefined {
        return this['script_version_uuid'];
    }
    public withScriptVersionName(scriptVersionName: string): JobScriptOrderInfoProp {
        this['script_version_name'] = scriptVersionName;
        return this;
    }
    public set scriptVersionName(scriptVersionName: string  | undefined) {
        this['script_version_name'] = scriptVersionName;
    }
    public get scriptVersionName(): string | undefined {
        return this['script_version_name'];
    }
    public withCurrentExecuteBatchIndex(currentExecuteBatchIndex: number): JobScriptOrderInfoProp {
        this['current_execute_batch_index'] = currentExecuteBatchIndex;
        return this;
    }
    public set currentExecuteBatchIndex(currentExecuteBatchIndex: number  | undefined) {
        this['current_execute_batch_index'] = currentExecuteBatchIndex;
    }
    public get currentExecuteBatchIndex(): number | undefined {
        return this['current_execute_batch_index'];
    }
    public withExecuteParam(executeParam: ScriptExecuteParam): JobScriptOrderInfoProp {
        this['execute_param'] = executeParam;
        return this;
    }
    public set executeParam(executeParam: ScriptExecuteParam  | undefined) {
        this['execute_param'] = executeParam;
    }
    public get executeParam(): ScriptExecuteParam | undefined {
        return this['execute_param'];
    }
}