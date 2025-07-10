import { CategoryDto } from './CategoryDto';


export class ReviewSettingDto {
    private 'categories_and_modules_enabled'?: boolean;
    private 'secondary_category_enabled'?: boolean;
    private 'forbidden_add_to_issue'?: boolean;
    private 'primary_categories'?: Array<CategoryDto>;
    private 'review_default_categories'?: Array<string>;
    private 'review_customized_categories'?: Array<string>;
    private 'review_modules'?: Array<string>;
    private 'source_id'?: number;
    private 'source_type'?: string;
    private 'source_path'?: string;
    private 'secondary_category_type'?: string;
    private 'secondary_categories'?: Array<CategoryDto>;
    public constructor() { 
    }
    public withCategoriesAndModulesEnabled(categoriesAndModulesEnabled: boolean): ReviewSettingDto {
        this['categories_and_modules_enabled'] = categoriesAndModulesEnabled;
        return this;
    }
    public set categoriesAndModulesEnabled(categoriesAndModulesEnabled: boolean  | undefined) {
        this['categories_and_modules_enabled'] = categoriesAndModulesEnabled;
    }
    public get categoriesAndModulesEnabled(): boolean | undefined {
        return this['categories_and_modules_enabled'];
    }
    public withSecondaryCategoryEnabled(secondaryCategoryEnabled: boolean): ReviewSettingDto {
        this['secondary_category_enabled'] = secondaryCategoryEnabled;
        return this;
    }
    public set secondaryCategoryEnabled(secondaryCategoryEnabled: boolean  | undefined) {
        this['secondary_category_enabled'] = secondaryCategoryEnabled;
    }
    public get secondaryCategoryEnabled(): boolean | undefined {
        return this['secondary_category_enabled'];
    }
    public withForbiddenAddToIssue(forbiddenAddToIssue: boolean): ReviewSettingDto {
        this['forbidden_add_to_issue'] = forbiddenAddToIssue;
        return this;
    }
    public set forbiddenAddToIssue(forbiddenAddToIssue: boolean  | undefined) {
        this['forbidden_add_to_issue'] = forbiddenAddToIssue;
    }
    public get forbiddenAddToIssue(): boolean | undefined {
        return this['forbidden_add_to_issue'];
    }
    public withPrimaryCategories(primaryCategories: Array<CategoryDto>): ReviewSettingDto {
        this['primary_categories'] = primaryCategories;
        return this;
    }
    public set primaryCategories(primaryCategories: Array<CategoryDto>  | undefined) {
        this['primary_categories'] = primaryCategories;
    }
    public get primaryCategories(): Array<CategoryDto> | undefined {
        return this['primary_categories'];
    }
    public withReviewDefaultCategories(reviewDefaultCategories: Array<string>): ReviewSettingDto {
        this['review_default_categories'] = reviewDefaultCategories;
        return this;
    }
    public set reviewDefaultCategories(reviewDefaultCategories: Array<string>  | undefined) {
        this['review_default_categories'] = reviewDefaultCategories;
    }
    public get reviewDefaultCategories(): Array<string> | undefined {
        return this['review_default_categories'];
    }
    public withReviewCustomizedCategories(reviewCustomizedCategories: Array<string>): ReviewSettingDto {
        this['review_customized_categories'] = reviewCustomizedCategories;
        return this;
    }
    public set reviewCustomizedCategories(reviewCustomizedCategories: Array<string>  | undefined) {
        this['review_customized_categories'] = reviewCustomizedCategories;
    }
    public get reviewCustomizedCategories(): Array<string> | undefined {
        return this['review_customized_categories'];
    }
    public withReviewModules(reviewModules: Array<string>): ReviewSettingDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: Array<string>  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): Array<string> | undefined {
        return this['review_modules'];
    }
    public withSourceId(sourceId: number): ReviewSettingDto {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withSourceType(sourceType: string): ReviewSettingDto {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourcePath(sourcePath: string): ReviewSettingDto {
        this['source_path'] = sourcePath;
        return this;
    }
    public set sourcePath(sourcePath: string  | undefined) {
        this['source_path'] = sourcePath;
    }
    public get sourcePath(): string | undefined {
        return this['source_path'];
    }
    public withSecondaryCategoryType(secondaryCategoryType: string): ReviewSettingDto {
        this['secondary_category_type'] = secondaryCategoryType;
        return this;
    }
    public set secondaryCategoryType(secondaryCategoryType: string  | undefined) {
        this['secondary_category_type'] = secondaryCategoryType;
    }
    public get secondaryCategoryType(): string | undefined {
        return this['secondary_category_type'];
    }
    public withSecondaryCategories(secondaryCategories: Array<CategoryDto>): ReviewSettingDto {
        this['secondary_categories'] = secondaryCategories;
        return this;
    }
    public set secondaryCategories(secondaryCategories: Array<CategoryDto>  | undefined) {
        this['secondary_categories'] = secondaryCategories;
    }
    public get secondaryCategories(): Array<CategoryDto> | undefined {
        return this['secondary_categories'];
    }
}