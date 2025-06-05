import { CategoryInfo } from './CategoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCategoriesTreeResponse extends SdkResponse {
    public categories?: Array<CategoryInfo>;
    public constructor() { 
        super();
    }
    public withCategories(categories: Array<CategoryInfo>): ListCategoriesTreeResponse {
        this['categories'] = categories;
        return this;
    }
}