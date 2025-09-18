import { PluginDTOExecutionInfoInnerExecutionInfoSteps } from './PluginDTOExecutionInfoInnerExecutionInfoSteps';


export class PluginDTOExecutionInfoInnerExecutionInfo {
    private 'execution_type'?: string;
    public steps?: Array<PluginDTOExecutionInfoInnerExecutionInfoSteps>;
    public constructor() { 
    }
    public withExecutionType(executionType: string): PluginDTOExecutionInfoInnerExecutionInfo {
        this['execution_type'] = executionType;
        return this;
    }
    public set executionType(executionType: string  | undefined) {
        this['execution_type'] = executionType;
    }
    public get executionType(): string | undefined {
        return this['execution_type'];
    }
    public withSteps(steps: Array<PluginDTOExecutionInfoInnerExecutionInfoSteps>): PluginDTOExecutionInfoInnerExecutionInfo {
        this['steps'] = steps;
        return this;
    }
}