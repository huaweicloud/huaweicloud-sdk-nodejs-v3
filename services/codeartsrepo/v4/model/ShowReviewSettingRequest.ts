

export class ShowReviewSettingRequest {
    private 'repository_id'?: number;
    private 'with_default_review_categories'?: boolean;
    private 'take_effect'?: boolean;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ShowReviewSettingRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withWithDefaultReviewCategories(withDefaultReviewCategories: boolean): ShowReviewSettingRequest {
        this['with_default_review_categories'] = withDefaultReviewCategories;
        return this;
    }
    public set withDefaultReviewCategories(withDefaultReviewCategories: boolean  | undefined) {
        this['with_default_review_categories'] = withDefaultReviewCategories;
    }
    public get withDefaultReviewCategories(): boolean | undefined {
        return this['with_default_review_categories'];
    }
    public withTakeEffect(takeEffect: boolean): ShowReviewSettingRequest {
        this['take_effect'] = takeEffect;
        return this;
    }
    public set takeEffect(takeEffect: boolean  | undefined) {
        this['take_effect'] = takeEffect;
    }
    public get takeEffect(): boolean | undefined {
        return this['take_effect'];
    }
}