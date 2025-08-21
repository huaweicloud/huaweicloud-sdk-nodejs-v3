import { SimpleTagDto } from './SimpleTagDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsResponse extends SdkResponse {
    public body?: Array<SimpleTagDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SimpleTagDto>): ListTagsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListTagsResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}