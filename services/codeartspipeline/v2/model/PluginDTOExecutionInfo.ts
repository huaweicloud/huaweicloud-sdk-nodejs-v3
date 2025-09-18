import { PluginDTOExecutionInfoInnerExecutionInfo } from './PluginDTOExecutionInfoInnerExecutionInfo';


export class PluginDTOExecutionInfo {
    private 'inner_execution_info'?: PluginDTOExecutionInfoInnerExecutionInfo;
    public constructor(innerExecutionInfo?: PluginDTOExecutionInfoInnerExecutionInfo) { 
        this['inner_execution_info'] = innerExecutionInfo;
    }
    public withInnerExecutionInfo(innerExecutionInfo: PluginDTOExecutionInfoInnerExecutionInfo): PluginDTOExecutionInfo {
        this['inner_execution_info'] = innerExecutionInfo;
        return this;
    }
    public set innerExecutionInfo(innerExecutionInfo: PluginDTOExecutionInfoInnerExecutionInfo  | undefined) {
        this['inner_execution_info'] = innerExecutionInfo;
    }
    public get innerExecutionInfo(): PluginDTOExecutionInfoInnerExecutionInfo | undefined {
        return this['inner_execution_info'];
    }
}