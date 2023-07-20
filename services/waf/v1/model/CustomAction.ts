

export class CustomAction {
    public category?: CustomActionCategoryEnum | string;
    private 'followed_action_id'?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: CustomActionCategoryEnum | string): CustomAction {
        this['category'] = category;
        return this;
    }
    public withFollowedActionId(followedActionId: string): CustomAction {
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
export enum CustomActionCategoryEnum {
    BLOCK = 'block',
    PASS = 'pass',
    LOG = 'log'
}
