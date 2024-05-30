

export class PolicyAction {
    public category?: PolicyActionCategoryEnum | string;
    private 'followed_action_id'?: string;
    public constructor() { 
    }
    public withCategory(category: PolicyActionCategoryEnum | string): PolicyAction {
        this['category'] = category;
        return this;
    }
    public withFollowedActionId(followedActionId: string): PolicyAction {
        this['followed_action_id'] = followedActionId;
        return this;
    }
    public set followedActionId(followedActionId: string  | undefined) {
        this['followed_action_id'] = followedActionId;
    }
    public get followedActionId(): string | undefined {
        return this['followed_action_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyActionCategoryEnum {
    BLOCK = 'block',
    LOG = 'log'
}
