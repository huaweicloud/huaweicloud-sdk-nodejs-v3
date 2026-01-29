

export class ComponentActionVersionInfo {
    public id?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'update_time'?: string;
    private 'action_version_name'?: string;
    private 'action_version_number'?: string;
    private 'action_version_desc'?: string;
    private 'action_input'?: string;
    private 'action_output'?: string;
    private 'action_code'?: string;
    private 'action_status'?: string;
    private 'action_enable'?: string;
    private 'debug_result'?: string;
    private 'debug_output'?: string;
    private 'debug_log'?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentActionVersionInfo {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): ComponentActionVersionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): ComponentActionVersionInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: string): ComponentActionVersionInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withActionVersionName(actionVersionName: string): ComponentActionVersionInfo {
        this['action_version_name'] = actionVersionName;
        return this;
    }
    public set actionVersionName(actionVersionName: string  | undefined) {
        this['action_version_name'] = actionVersionName;
    }
    public get actionVersionName(): string | undefined {
        return this['action_version_name'];
    }
    public withActionVersionNumber(actionVersionNumber: string): ComponentActionVersionInfo {
        this['action_version_number'] = actionVersionNumber;
        return this;
    }
    public set actionVersionNumber(actionVersionNumber: string  | undefined) {
        this['action_version_number'] = actionVersionNumber;
    }
    public get actionVersionNumber(): string | undefined {
        return this['action_version_number'];
    }
    public withActionVersionDesc(actionVersionDesc: string): ComponentActionVersionInfo {
        this['action_version_desc'] = actionVersionDesc;
        return this;
    }
    public set actionVersionDesc(actionVersionDesc: string  | undefined) {
        this['action_version_desc'] = actionVersionDesc;
    }
    public get actionVersionDesc(): string | undefined {
        return this['action_version_desc'];
    }
    public withActionInput(actionInput: string): ComponentActionVersionInfo {
        this['action_input'] = actionInput;
        return this;
    }
    public set actionInput(actionInput: string  | undefined) {
        this['action_input'] = actionInput;
    }
    public get actionInput(): string | undefined {
        return this['action_input'];
    }
    public withActionOutput(actionOutput: string): ComponentActionVersionInfo {
        this['action_output'] = actionOutput;
        return this;
    }
    public set actionOutput(actionOutput: string  | undefined) {
        this['action_output'] = actionOutput;
    }
    public get actionOutput(): string | undefined {
        return this['action_output'];
    }
    public withActionCode(actionCode: string): ComponentActionVersionInfo {
        this['action_code'] = actionCode;
        return this;
    }
    public set actionCode(actionCode: string  | undefined) {
        this['action_code'] = actionCode;
    }
    public get actionCode(): string | undefined {
        return this['action_code'];
    }
    public withActionStatus(actionStatus: string): ComponentActionVersionInfo {
        this['action_status'] = actionStatus;
        return this;
    }
    public set actionStatus(actionStatus: string  | undefined) {
        this['action_status'] = actionStatus;
    }
    public get actionStatus(): string | undefined {
        return this['action_status'];
    }
    public withActionEnable(actionEnable: string): ComponentActionVersionInfo {
        this['action_enable'] = actionEnable;
        return this;
    }
    public set actionEnable(actionEnable: string  | undefined) {
        this['action_enable'] = actionEnable;
    }
    public get actionEnable(): string | undefined {
        return this['action_enable'];
    }
    public withDebugResult(debugResult: string): ComponentActionVersionInfo {
        this['debug_result'] = debugResult;
        return this;
    }
    public set debugResult(debugResult: string  | undefined) {
        this['debug_result'] = debugResult;
    }
    public get debugResult(): string | undefined {
        return this['debug_result'];
    }
    public withDebugOutput(debugOutput: string): ComponentActionVersionInfo {
        this['debug_output'] = debugOutput;
        return this;
    }
    public set debugOutput(debugOutput: string  | undefined) {
        this['debug_output'] = debugOutput;
    }
    public get debugOutput(): string | undefined {
        return this['debug_output'];
    }
    public withDebugLog(debugLog: string): ComponentActionVersionInfo {
        this['debug_log'] = debugLog;
        return this;
    }
    public set debugLog(debugLog: string  | undefined) {
        this['debug_log'] = debugLog;
    }
    public get debugLog(): string | undefined {
        return this['debug_log'];
    }
}