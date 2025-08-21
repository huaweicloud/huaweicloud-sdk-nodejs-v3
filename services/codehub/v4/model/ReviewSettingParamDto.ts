

export class ReviewSettingParamDto {
    private 'categories_and_modules_enabled'?: boolean;
    private 'review_modules'?: Array<string>;
    private 'secondary_category_enabled'?: boolean;
    private 'review_default_categories'?: Array<string>;
    private 'review_customized_categories'?: Array<string>;
    private 'is_assignee_id_required'?: boolean;
    private 'is_review_categories_required'?: boolean;
    private 'is_review_modules_required'?: boolean;
    public constructor() { 
    }
    public withCategoriesAndModulesEnabled(categoriesAndModulesEnabled: boolean): ReviewSettingParamDto {
        this['categories_and_modules_enabled'] = categoriesAndModulesEnabled;
        return this;
    }
    public set categoriesAndModulesEnabled(categoriesAndModulesEnabled: boolean  | undefined) {
        this['categories_and_modules_enabled'] = categoriesAndModulesEnabled;
    }
    public get categoriesAndModulesEnabled(): boolean | undefined {
        return this['categories_and_modules_enabled'];
    }
    public withReviewModules(reviewModules: Array<string>): ReviewSettingParamDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: Array<string>  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): Array<string> | undefined {
        return this['review_modules'];
    }
    public withSecondaryCategoryEnabled(secondaryCategoryEnabled: boolean): ReviewSettingParamDto {
        this['secondary_category_enabled'] = secondaryCategoryEnabled;
        return this;
    }
    public set secondaryCategoryEnabled(secondaryCategoryEnabled: boolean  | undefined) {
        this['secondary_category_enabled'] = secondaryCategoryEnabled;
    }
    public get secondaryCategoryEnabled(): boolean | undefined {
        return this['secondary_category_enabled'];
    }
    public withReviewDefaultCategories(reviewDefaultCategories: Array<string>): ReviewSettingParamDto {
        this['review_default_categories'] = reviewDefaultCategories;
        return this;
    }
    public set reviewDefaultCategories(reviewDefaultCategories: Array<string>  | undefined) {
        this['review_default_categories'] = reviewDefaultCategories;
    }
    public get reviewDefaultCategories(): Array<string> | undefined {
        return this['review_default_categories'];
    }
    public withReviewCustomizedCategories(reviewCustomizedCategories: Array<string>): ReviewSettingParamDto {
        this['review_customized_categories'] = reviewCustomizedCategories;
        return this;
    }
    public set reviewCustomizedCategories(reviewCustomizedCategories: Array<string>  | undefined) {
        this['review_customized_categories'] = reviewCustomizedCategories;
    }
    public get reviewCustomizedCategories(): Array<string> | undefined {
        return this['review_customized_categories'];
    }
    public withIsAssigneeIdRequired(isAssigneeIdRequired: boolean): ReviewSettingParamDto {
        this['is_assignee_id_required'] = isAssigneeIdRequired;
        return this;
    }
    public set isAssigneeIdRequired(isAssigneeIdRequired: boolean  | undefined) {
        this['is_assignee_id_required'] = isAssigneeIdRequired;
    }
    public get isAssigneeIdRequired(): boolean | undefined {
        return this['is_assignee_id_required'];
    }
    public withIsReviewCategoriesRequired(isReviewCategoriesRequired: boolean): ReviewSettingParamDto {
        this['is_review_categories_required'] = isReviewCategoriesRequired;
        return this;
    }
    public set isReviewCategoriesRequired(isReviewCategoriesRequired: boolean  | undefined) {
        this['is_review_categories_required'] = isReviewCategoriesRequired;
    }
    public get isReviewCategoriesRequired(): boolean | undefined {
        return this['is_review_categories_required'];
    }
    public withIsReviewModulesRequired(isReviewModulesRequired: boolean): ReviewSettingParamDto {
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