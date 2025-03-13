import { DataCategoryDTO } from './DataCategoryDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDataCategoriesResponse extends SdkResponse {
    public total?: number;
    private 'category_groups'?: Array<DataCategoryDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityDataCategoriesResponse {
        this['total'] = total;
        return this;
    }
    public withCategoryGroups(categoryGroups: Array<DataCategoryDTO>): ListSecurityDataCategoriesResponse {
        this['category_groups'] = categoryGroups;
        return this;
    }
    public set categoryGroups(categoryGroups: Array<DataCategoryDTO>  | undefined) {
        this['category_groups'] = categoryGroups;
    }
    public get categoryGroups(): Array<DataCategoryDTO> | undefined {
        return this['category_groups'];
    }
}