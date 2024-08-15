

export class AuthorizableTicketBody {
    public type?: string;
    private 'scope_id'?: string;
    private 'target_id'?: string;
    public constructor() { 
    }
    public withType(type: string): AuthorizableTicketBody {
        this['type'] = type;
        return this;
    }
    public withScopeId(scopeId: string): AuthorizableTicketBody {
        this['scope_id'] = scopeId;
        return this;
    }
    public set scopeId(scopeId: string  | undefined) {
        this['scope_id'] = scopeId;
    }
    public get scopeId(): string | undefined {
        return this['scope_id'];
    }
    public withTargetId(targetId: string): AuthorizableTicketBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}