

export class TopologyNodeInfo {
    private 'instance_type'?: string;
    private 'action_id'?: string;
    private 'action_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_msg'?: string;
    public input?: string;
    public output?: string;
    private 'parent_instance_id'?: string;
    public status?: TopologyNodeInfoStatusEnum | string;
    public succeed?: boolean;
    public constructor() { 
    }
    public withInstanceType(instanceType: string): TopologyNodeInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withActionId(actionId: string): TopologyNodeInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withActionName(actionName: string): TopologyNodeInfo {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
    public withStartTime(startTime: string): TopologyNodeInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TopologyNodeInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorMsg(errorMsg: string): TopologyNodeInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withInput(input: string): TopologyNodeInfo {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): TopologyNodeInfo {
        this['output'] = output;
        return this;
    }
    public withParentInstanceId(parentInstanceId: string): TopologyNodeInfo {
        this['parent_instance_id'] = parentInstanceId;
        return this;
    }
    public set parentInstanceId(parentInstanceId: string  | undefined) {
        this['parent_instance_id'] = parentInstanceId;
    }
    public get parentInstanceId(): string | undefined {
        return this['parent_instance_id'];
    }
    public withStatus(status: TopologyNodeInfoStatusEnum | string): TopologyNodeInfo {
        this['status'] = status;
        return this;
    }
    public withSucceed(succeed: boolean): TopologyNodeInfo {
        this['succeed'] = succeed;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TopologyNodeInfoStatusEnum {
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    FINISHED = 'FINISHED'
}
