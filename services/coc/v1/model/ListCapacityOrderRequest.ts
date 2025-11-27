

export class ListCapacityOrderRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    private 'group_id'?: string;
    public provider?: string;
    public type?: string;
    public constructor(provider?: string, type?: string) { 
        this['provider'] = provider;
        this['type'] = type;
    }
    public withApplicationId(applicationId: string): ListCapacityOrderRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ListCapacityOrderRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withGroupId(groupId: string): ListCapacityOrderRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withProvider(provider: string): ListCapacityOrderRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ListCapacityOrderRequest {
        this['type'] = type;
        return this;
    }
}