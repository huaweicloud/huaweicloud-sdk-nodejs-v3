

export class CreateProcessInstanceReqOpinions {
    private 'user_id'?: string;
    private 'curr_owner'?: string;
    public constructor() { 
    }
    public withUserId(userId: string): CreateProcessInstanceReqOpinions {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withCurrOwner(currOwner: string): CreateProcessInstanceReqOpinions {
        this['curr_owner'] = currOwner;
        return this;
    }
    public set currOwner(currOwner: string  | undefined) {
        this['curr_owner'] = currOwner;
    }
    public get currOwner(): string | undefined {
        return this['curr_owner'];
    }
}