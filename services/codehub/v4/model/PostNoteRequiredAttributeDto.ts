

export class PostNoteRequiredAttributeDto {
    private 'is_assignee_id_required'?: boolean;
    private 'is_review_categories_required'?: boolean;
    private 'is_review_modules_required'?: boolean;
    public constructor() { 
    }
    public withIsAssigneeIdRequired(isAssigneeIdRequired: boolean): PostNoteRequiredAttributeDto {
        this['is_assignee_id_required'] = isAssigneeIdRequired;
        return this;
    }
    public set isAssigneeIdRequired(isAssigneeIdRequired: boolean  | undefined) {
        this['is_assignee_id_required'] = isAssigneeIdRequired;
    }
    public get isAssigneeIdRequired(): boolean | undefined {
        return this['is_assignee_id_required'];
    }
    public withIsReviewCategoriesRequired(isReviewCategoriesRequired: boolean): PostNoteRequiredAttributeDto {
        this['is_review_categories_required'] = isReviewCategoriesRequired;
        return this;
    }
    public set isReviewCategoriesRequired(isReviewCategoriesRequired: boolean  | undefined) {
        this['is_review_categories_required'] = isReviewCategoriesRequired;
    }
    public get isReviewCategoriesRequired(): boolean | undefined {
        return this['is_review_categories_required'];
    }
    public withIsReviewModulesRequired(isReviewModulesRequired: boolean): PostNoteRequiredAttributeDto {
        this['is_review_modules_required'] = isReviewModulesRequired;
        return this;
    }
    public set isReviewModulesRequired(isReviewModulesRequired: boolean  | undefined) {
        this['is_review_modules_required'] = isReviewModulesRequired;
    }
    public get isReviewModulesRequired(): boolean | undefined {
        return this['is_review_modules_required'];
    }
}