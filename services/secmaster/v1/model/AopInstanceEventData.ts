import { PlaybookcontextRef } from './PlaybookcontextRef';


export class AopInstanceEventData {
    private 'command_type'?: AopInstanceEventDataCommandTypeEnum | string;
    private 'action_type'?: AopInstanceEventDataActionTypeEnum | string;
    private 'action_id'?: string;
    private 'action_instance_id'?: string;
    private 'playbook_context'?: PlaybookcontextRef;
    public constructor(commandType?: string, actionType?: string) { 
        this['command_type'] = commandType;
        this['action_type'] = actionType;
    }
    public withCommandType(commandType: AopInstanceEventDataCommandTypeEnum | string): AopInstanceEventData {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: AopInstanceEventDataCommandTypeEnum | string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): AopInstanceEventDataCommandTypeEnum | string | undefined {
        return this['command_type'];
    }
    public withActionType(actionType: AopInstanceEventDataActionTypeEnum | string): AopInstanceEventData {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: AopInstanceEventDataActionTypeEnum | string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): AopInstanceEventDataActionTypeEnum | string | undefined {
        return this['action_type'];
    }
    public withActionId(actionId: string): AopInstanceEventData {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withActionInstanceId(actionInstanceId: string): AopInstanceEventData {
        this['action_instance_id'] = actionInstanceId;
        return this;
    }
    public set actionInstanceId(actionInstanceId: string  | undefined) {
        this['action_instance_id'] = actionInstanceId;
    }
    public get actionInstanceId(): string | undefined {
        return this['action_instance_id'];
    }
    public withPlaybookContext(playbookContext: PlaybookcontextRef): AopInstanceEventData {
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
export enum AopInstanceEventDataCommandTypeEnum {
    ACTIONINSTANCERUNCOMMAND = 'ActionInstanceRunCommand'
}
/**
    * @export
    * @enum {string}
    */
export enum AopInstanceEventDataActionTypeEnum {
    WORKFLOW = 'workflow'
}
