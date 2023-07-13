

export class CustomAction {
    public category: CustomActionCategoryEnum;
    private 'followed_action_id'?: string | undefined;
    public constructor(category?: any) { 
        this['category'] = category;
    }
    public withCategory(category: CustomActionCategoryEnum): CustomAction {
        this['category'] = category;
        return this;
    }
    public withFollowedActionId(followedActionId: string): CustomAction {
        this['followed_action_id'] = followedActionId;
        return this;
    }
    public set followedActionId(followedActionId: string | undefined) {
        this['followed_action_id'] = followedActionId;
    }
    public get followedActionId() {
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
