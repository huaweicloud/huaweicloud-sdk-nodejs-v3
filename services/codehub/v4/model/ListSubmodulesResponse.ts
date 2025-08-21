import { SubmoduleDto } from './SubmoduleDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubmodulesResponse extends SdkResponse {
    public body?: Array<SubmoduleDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SubmoduleDto>): ListSubmodulesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListSubmodulesResponse {
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