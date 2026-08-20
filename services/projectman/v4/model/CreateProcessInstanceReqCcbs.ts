

export class CreateProcessInstanceReqCcbs {
    private 'user_id'?: string;
    public constructor() { 
    }
    public withUserId(userId: string): CreateProcessInstanceReqCcbs {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}