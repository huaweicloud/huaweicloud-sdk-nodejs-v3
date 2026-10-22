import { CategoryItem } from './CategoryItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPiiCategoriesResponse extends SdkResponse {
    public items?: Array<CategoryItem>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withItems(items: Array<CategoryItem>): ListPiiCategoriesResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPiiCategoriesResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}