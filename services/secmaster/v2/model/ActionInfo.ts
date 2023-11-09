

export class ActionInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'action_type'?: string;
    private 'action_id'?: string;
    private 'playbook_id'?: string;
    private 'playbook_version_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ActionInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ActionInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ActionInfo {
        this['description'] = description;
        return this;
    }
    public withActionType(actionType: string): ActionInfo {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
    public withActionId(actionId: string): ActionInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withPlaybookId(playbookId: string): ActionInfo {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withPlaybookVersionId(playbookVersionId: string): ActionInfo {
        this['playbook_version_id'] = playbookVersionId;
        return this;
    }
    public set playbookVersionId(playbookVersionId: string  | undefined) {
        this['playbook_version_id'] = playbookVersionId;
    }
    public get playbookVersionId(): string | undefined {
        return this['playbook_version_id'];
    }
    public withProjectId(projectId: string): ActionInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}