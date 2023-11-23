

export class PluginDTOExecutionInfo {
    private 'inner_execution_info'?: object;
    public constructor() { 
    }
    public withInnerExecutionInfo(innerExecutionInfo: object): PluginDTOExecutionInfo {
        this['inner_execution_info'] = innerExecutionInfo;
        return this;
    }
    public set innerExecutionInfo(innerExecutionInfo: object  | undefined) {
        this['inner_execution_info'] = innerExecutionInfo;
    }
    public get innerExecutionInfo(): object | undefined {
        return this['inner_execution_info'];
    }
}