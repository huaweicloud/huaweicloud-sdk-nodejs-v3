

export class ExecuteScriptOrCommandReq {
    private 'gray_count'?: number;
    private 'resource_type'?: string;
    private 'gray_resource_ids'?: Array<string>;
    private 'gray_fail_threshold'?: number;
    private 'resource_ids'?: Array<string>;
    private 'script_ids'?: Array<string>;
    public command?: string;
    private 'command_type'?: string;
    private 'execution_timeout'?: number;
    private 'pre_start'?: string;
    private 'post_finish'?: string;
    private 'resource_group_type'?: string;
    private 'resource_group_id'?: string;
    public constructor() { 
    }
    public withGrayCount(grayCount: number): ExecuteScriptOrCommandReq {
        this['gray_count'] = grayCount;
        return this;
    }
    public set grayCount(grayCount: number  | undefined) {
        this['gray_count'] = grayCount;
    }
    public get grayCount(): number | undefined {
        return this['gray_count'];
    }
    public withResourceType(resourceType: string): ExecuteScriptOrCommandReq {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withGrayResourceIds(grayResourceIds: Array<string>): ExecuteScriptOrCommandReq {
        this['gray_resource_ids'] = grayResourceIds;
        return this;
    }
    public set grayResourceIds(grayResourceIds: Array<string>  | undefined) {
        this['gray_resource_ids'] = grayResourceIds;
    }
    public get grayResourceIds(): Array<string> | undefined {
        return this['gray_resource_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): ExecuteScriptOrCommandReq {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withResourceIds(resourceIds: Array<string>): ExecuteScriptOrCommandReq {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withScriptIds(scriptIds: Array<string>): ExecuteScriptOrCommandReq {
        this['script_ids'] = scriptIds;
        return this;
    }
    public set scriptIds(scriptIds: Array<string>  | undefined) {
        this['script_ids'] = scriptIds;
    }
    public get scriptIds(): Array<string> | undefined {
        return this['script_ids'];
    }
    public withCommand(command: string): ExecuteScriptOrCommandReq {
        this['command'] = command;
        return this;
    }
    public withCommandType(commandType: string): ExecuteScriptOrCommandReq {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): string | undefined {
        return this['command_type'];
    }
    public withExecutionTimeout(executionTimeout: number): ExecuteScriptOrCommandReq {
        this['execution_timeout'] = executionTimeout;
        return this;
    }
    public set executionTimeout(executionTimeout: number  | undefined) {
        this['execution_timeout'] = executionTimeout;
    }
    public get executionTimeout(): number | undefined {
        return this['execution_timeout'];
    }
    public withPreStart(preStart: string): ExecuteScriptOrCommandReq {
        this['pre_start'] = preStart;
        return this;
    }
    public set preStart(preStart: string  | undefined) {
        this['pre_start'] = preStart;
    }
    public get preStart(): string | undefined {
        return this['pre_start'];
    }
    public withPostFinish(postFinish: string): ExecuteScriptOrCommandReq {
        this['post_finish'] = postFinish;
        return this;
    }
    public set postFinish(postFinish: string  | undefined) {
        this['post_finish'] = postFinish;
    }
    public get postFinish(): string | undefined {
        return this['post_finish'];
    }
    public withResourceGroupType(resourceGroupType: string): ExecuteScriptOrCommandReq {
        this['resource_group_type'] = resourceGroupType;
        return this;
    }
    public set resourceGroupType(resourceGroupType: string  | undefined) {
        this['resource_group_type'] = resourceGroupType;
    }
    public get resourceGroupType(): string | undefined {
        return this['resource_group_type'];
    }
    public withResourceGroupId(resourceGroupId: string): ExecuteScriptOrCommandReq {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: string  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): string | undefined {
        return this['resource_group_id'];
    }
}