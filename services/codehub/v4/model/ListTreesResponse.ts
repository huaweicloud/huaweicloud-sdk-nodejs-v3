import { TreeObjectDto } from './TreeObjectDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTreesResponse extends SdkResponse {
    public body?: Array<TreeObjectDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TreeObjectDto>): ListTreesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListTreesResponse {
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