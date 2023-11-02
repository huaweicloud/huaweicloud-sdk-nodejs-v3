import { CategoryDetailVO } from './CategoryDetailVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCategoryResponse extends SdkResponse {
    public body?: Array<CategoryDetailVO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CategoryDetailVO>): ListCategoryResponse {
        this['body'] = body;
        return this;
    }
}