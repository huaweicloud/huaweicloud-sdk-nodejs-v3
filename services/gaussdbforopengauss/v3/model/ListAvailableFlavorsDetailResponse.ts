import { FlavorCategoryDetail } from './FlavorCategoryDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableFlavorsDetailResponse extends SdkResponse {
    private 'flavor_category'?: FlavorCategoryDetail;
    public constructor() { 
        super();
    }
    public withFlavorCategory(flavorCategory: FlavorCategoryDetail): ListAvailableFlavorsDetailResponse {
        this['flavor_category'] = flavorCategory;
        return this;
    }
    public set flavorCategory(flavorCategory: FlavorCategoryDetail  | undefined) {
        this['flavor_category'] = flavorCategory;
    }
    public get flavorCategory(): FlavorCategoryDetail | undefined {
        return this['flavor_category'];
    }
}