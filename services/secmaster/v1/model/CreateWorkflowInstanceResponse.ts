import { PlaybookcontextRef } from './PlaybookcontextRef';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkflowInstanceResponse extends SdkResponse {
    private 'command_type'?: CreateWorkflowInstanceResponseCommandTypeEnum | string;
    private 'action_type'?: CreateWorkflowInstanceResponseActionTypeEnum | string;
    private 'action_id'?: string;
    private 'action_instance_id'?: string;
    private 'playbook_context'?: PlaybookcontextRef;
    public constructor() { 
        super();
    }
    public withCommandType(commandType: CreateWorkflowInstanceResponseCommandTypeEnum | string): CreateWorkflowInstanceResponse {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: CreateWorkflowInstanceResponseCommandTypeEnum | string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): CreateWorkflowInstanceResponseCommandTypeEnum | string | undefined {
        return this['command_type'];
    }
    public withActionType(actionType: CreateWorkflowInstanceResponseActionTypeEnum | string): CreateWorkflowInstanceResponse {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: CreateWorkflowInstanceResponseActionTypeEnum | string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): CreateWorkflowInstanceResponseActionTypeEnum | string | undefined {
        return this['action_type'];
    }
    public withActionId(actionId: string): CreateWorkflowInstanceResponse {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withActionInstanceId(actionInstanceId: string): CreateWorkflowInstanceResponse {
        this['action_instance_id'] = actionInstanceId;
        return this;
    }
    public set actionInstanceId(actionInstanceId: string  | undefined) {
        this['action_instance_id'] = actionInstanceId;
    }
    public get actionInstanceId(): string | undefined {
        return this['action_instance_id'];
    }
    public withPlaybookContext(playbookContext: PlaybookcontextRef): CreateWorkflowInstanceResponse {
        this['playbook_context'] = playbookContext;
        return this;
    }
    public set playbookContext(playbookContext: PlaybookcontextRef  | undefined) {
        this['playbook_context'] = playbookContext;
    }
    public get playbookContext(): PlaybookcontextRef | undefined {
        return this['playbook_context'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateWorkflowInstanceResponseCommandTypeEnum {
    ACTIONINSTANCERUNCOMMAND = 'ActionInstanceRunCommand'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateWorkflowInstanceResponseActionTypeEnum {
    WORKFLOW = 'workflow'
}
