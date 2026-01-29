import { ComponentActionVersionInfo } from './ComponentActionVersionInfo';


export class ComponentActionInfo {
    public id?: string;
    private 'action_name'?: string;
    private 'action_desc'?: string;
    private 'action_type'?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'can_update'?: boolean;
    private 'action_version_id'?: string;
    private 'action_version_name'?: string;
    private 'action_version_number'?: string;
    private 'action_enable'?: string;
    private 'action_input'?: string;
    private 'action_output'?: string;
    private 'action_versions'?: Array<ComponentActionVersionInfo>;
    public constructor() { 
    }
    public withId(id: string): ComponentActionInfo {
        this['id'] = id;
        return this;
    }
    public withActionName(actionName: string): ComponentActionInfo {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
    public withActionDesc(actionDesc: string): ComponentActionInfo {
        this['action_desc'] = actionDesc;
        return this;
    }
    public set actionDesc(actionDesc: string  | undefined) {
        this['action_desc'] = actionDesc;
    }
    public get actionDesc(): string | undefined {
        return this['action_desc'];
    }
    public withActionType(actionType: string): ComponentActionInfo {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
    public withCreateTime(createTime: string): ComponentActionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): ComponentActionInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCanUpdate(canUpdate: boolean): ComponentActionInfo {
        this['can_update'] = canUpdate;
        return this;
    }
    public set canUpdate(canUpdate: boolean  | undefined) {
        this['can_update'] = canUpdate;
    }
    public get canUpdate(): boolean | undefined {
        return this['can_update'];
    }
    public withActionVersionId(actionVersionId: string): ComponentActionInfo {
        this['action_version_id'] = actionVersionId;
        return this;
    }
    public set actionVersionId(actionVersionId: string  | undefined) {
        this['action_version_id'] = actionVersionId;
    }
    public get actionVersionId(): string | undefined {
        return this['action_version_id'];
    }
    public withActionVersionName(actionVersionName: string): ComponentActionInfo {
        this['action_version_name'] = actionVersionName;
        return this;
    }
    public set actionVersionName(actionVersionName: string  | undefined) {
        this['action_version_name'] = actionVersionName;
    }
    public get actionVersionName(): string | undefined {
        return this['action_version_name'];
    }
    public withActionVersionNumber(actionVersionNumber: string): ComponentActionInfo {
        this['action_version_number'] = actionVersionNumber;
        return this;
    }
    public set actionVersionNumber(actionVersionNumber: string  | undefined) {
        this['action_version_number'] = actionVersionNumber;
    }
    public get actionVersionNumber(): string | undefined {
        return this['action_version_number'];
    }
    public withActionEnable(actionEnable: string): ComponentActionInfo {
        this['action_enable'] = actionEnable;
        return this;
    }
    public set actionEnable(actionEnable: string  | undefined) {
        this['action_enable'] = actionEnable;
    }
    public get actionEnable(): string | undefined {
        return this['action_enable'];
    }
    public withActionInput(actionInput: string): ComponentActionInfo {
        this['action_input'] = actionInput;
        return this;
    }
    public set actionInput(actionInput: string  | undefined) {
        this['action_input'] = actionInput;
    }
    public get actionInput(): string | undefined {
        return this['action_input'];
    }
    public withActionOutput(actionOutput: string): ComponentActionInfo {
        this['action_output'] = actionOutput;
        return this;
    }
    public set actionOutput(actionOutput: string  | undefined) {
        this['action_output'] = actionOutput;
    }
    public get actionOutput(): string | undefined {
        return this['action_output'];
    }
    public withActionVersions(actionVersions: Array<ComponentActionVersionInfo>): ComponentActionInfo {
        this['action_versions'] = actionVersions;
        return this;
    }
    public set actionVersions(actionVersions: Array<ComponentActionVersionInfo>  | undefined) {
        this['action_versions'] = actionVersions;
    }
    public get actionVersions(): Array<ComponentActionVersionInfo> | undefined {
        return this['action_versions'];
    }
}