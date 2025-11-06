import { CategoryDto } from './CategoryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDefaultReviewCategoriesResponse extends SdkResponse {
    private 'codehub_default_categories'?: Array<CategoryDto>;
    private 'hicode_default_categories'?: Array<CategoryDto>;
    public constructor() { 
        super();
    }
    public withCodehubDefaultCategories(codehubDefaultCategories: Array<CategoryDto>): ListDefaultReviewCategoriesResponse {
        this['codehub_default_categories'] = codehubDefaultCategories;
        return this;
    }
    public set codehubDefaultCategories(codehubDefaultCategories: Array<CategoryDto>  | undefined) {
        this['codehub_default_categories'] = codehubDefaultCategories;
    }
    public get codehubDefaultCategories(): Array<CategoryDto> | undefined {
        return this['codehub_default_categories'];
    }
    public withHicodeDefaultCategories(hicodeDefaultCategories: Array<CategoryDto>): ListDefaultReviewCategoriesResponse {
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