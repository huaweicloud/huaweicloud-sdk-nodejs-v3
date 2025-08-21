import { CategoryDto } from './CategoryDto';
import { RequiredAttributeDto } from './RequiredAttributeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupReviewSettingsResponse extends SdkResponse {
    private 'categories_and_modules_enabled'?: boolean;
    private 'secondary_category_enabled'?: boolean;
    private 'primary_categories'?: Array<CategoryDto>;
    private 'review_default_categories'?: Array<string>;
    private 'review_customized_categories'?: Array<string>;
    private 'review_modules'?: Array<string>;
    private 'repository_id'?: number;
    private 'note_required_attributes'?: Array<RequiredAttributeDto>;
    private 'codehub_default_categories'?: Array<CategoryDto>;
    private 'hicode_default_categories'?: Array<CategoryDto>;
    public constructor() { 
        super();
    }
    public withCategoriesAndModulesEnabled(categoriesAndModulesEnabled: boolean): ShowGroupReviewSettingsResponse {
        this['categories_and_modules_enabled'] = categoriesAndModulesEnabled;
        return this;
    }
    public set categoriesAndModulesEnabled(categoriesAndModulesEnabled: boolean  | undefined) {
        this['categories_and_modules_enabled'] = categoriesAndModulesEnabled;
    }
    public get categoriesAndModulesEnabled(): boolean | undefined {
        return this['categories_and_modules_enabled'];
    }
    public withSecondaryCategoryEnabled(secondaryCategoryEnabled: boolean): ShowGroupReviewSettingsResponse {
        this['secondary_category_enabled'] = secondaryCategoryEnabled;
        return this;
    }
    public set secondaryCategoryEnabled(secondaryCategoryEnabled: boolean  | undefined) {
        this['secondary_category_enabled'] = secondaryCategoryEnabled;
    }
    public get secondaryCategoryEnabled(): boolean | undefined {
        return this['secondary_category_enabled'];
    }
    public withPrimaryCategories(primaryCategories: Array<CategoryDto>): ShowGroupReviewSettingsResponse {
        this['primary_categories'] = primaryCategories;
        return this;
    }
    public set primaryCategories(primaryCategories: Array<CategoryDto>  | undefined) {
        this['primary_categories'] = primaryCategories;
    }
    public get primaryCategories(): Array<CategoryDto> | undefined {
        return this['primary_categories'];
    }
    public withReviewDefaultCategories(reviewDefaultCategories: Array<string>): ShowGroupReviewSettingsResponse {
        this['review_default_categories'] = reviewDefaultCategories;
        return this;
    }
    public set reviewDefaultCategories(reviewDefaultCategories: Array<string>  | undefined) {
        this['review_default_categories'] = reviewDefaultCategories;
    }
    public get reviewDefaultCategories(): Array<string> | undefined {
        return this['review_default_categories'];
    }
    public withReviewCustomizedCategories(reviewCustomizedCategories: Array<string>): ShowGroupReviewSettingsResponse {
        this['review_customized_categories'] = reviewCustomizedCategories;
        return this;
    }
    public set reviewCustomizedCategories(reviewCustomizedCategories: Array<string>  | undefined) {
        this['review_customized_categories'] = reviewCustomizedCategories;
    }
    public get reviewCustomizedCategories(): Array<string> | undefined {
        return this['review_customized_categories'];
    }
    public withReviewModules(reviewModules: Array<string>): ShowGroupReviewSettingsResponse {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: Array<string>  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): Array<string> | undefined {
        return this['review_modules'];
    }
    public withRepositoryId(repositoryId: number): ShowGroupReviewSettingsResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withNoteRequiredAttributes(noteRequiredAttributes: Array<RequiredAttributeDto>): ShowGroupReviewSettingsResponse {
        this['note_required_attributes'] = noteRequiredAttributes;
        return this;
    }
    public set noteRequiredAttributes(noteRequiredAttributes: Array<RequiredAttributeDto>  | undefined) {
        this['note_required_attributes'] = noteRequiredAttributes;
    }
    public get noteRequiredAttributes(): Array<RequiredAttributeDto> | undefined {
        return this['note_required_attributes'];
    }
    public withCodehubDefaultCategories(codehubDefaultCategories: Array<CategoryDto>): ShowGroupReviewSettingsResponse {
        this['codehub_default_categories'] = codehubDefaultCategories;
        return this;
    }
    public set codehubDefaultCategories(codehubDefaultCategories: Array<CategoryDto>  | undefined) {
        this['codehub_default_categories'] = codehubDefaultCategories;
    }
    public get codehubDefaultCategories(): Array<CategoryDto> | undefined {
        return this['codehub_default_categories'];
    }
    public withHicodeDefaultCategories(hicodeDefaultCategories: Array<CategoryDto>): ShowGroupReviewSettingsResponse {
        this['hicode_default_categories'] = hicodeDefaultCategories;
        return this;
    }
    public set hicodeDefaultCategories(hicodeDefaultCategories: Array<CategoryDto>  | undefined) {
        this['hicode_default_categories'] = hicodeDefaultCategories;
    }
    public get hicodeDefaultCategories(): Array<CategoryDto> | undefined {
        return this['hicode_default_categories'];
    }
}