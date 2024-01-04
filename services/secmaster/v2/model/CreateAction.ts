

export class CreateAction {
    public name?: string;
    public description?: string;
    private 'action_type'?: string;
    private 'action_id'?: string;
    private 'sort_order'?: string;
    public constructor(actionType?: string, actionId?: string) { 
        this['action_type'] = actionType;
        this['action_id'] = actionId;
    }
    public withName(name: string): CreateAction {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAction {
        this['description'] = description;
        return this;
    }
    public withActionType(actionType: string): CreateAction {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
    public withActionId(actionId: string): CreateAction {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withSortOrder(sortOrder: string): CreateAction {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
}