

export class AuthRequests {
    private 'action_id'?: string;
    public action?: string;
    public resource?: string;
    private 'service_attributes'?: { [key: string]: string; };
    public constructor(actionId?: string, action?: string) { 
        this['action_id'] = actionId;
        this['action'] = action;
    }
    public withActionId(actionId: string): AuthRequests {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withAction(action: string): AuthRequests {
        this['action'] = action;
        return this;
    }
    public withResource(resource: string): AuthRequests {
        this['resource'] = resource;
        return this;
    }
    public withServiceAttributes(serviceAttributes: { [key: string]: string; }): AuthRequests {
        this['service_attributes'] = serviceAttributes;
        return this;
    }
    public set serviceAttributes(serviceAttributes: { [key: string]: string; }  | undefined) {
        this['service_attributes'] = serviceAttributes;
    }
    public get serviceAttributes(): { [key: string]: string; } | undefined {
        return this['service_attributes'];
    }
}