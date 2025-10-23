import { TenantRepositoryDto } from './TenantRepositoryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantRepositoriesResponse extends SdkResponse {
    public body?: Array<TenantRepositoryDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TenantRepositoryDto>): ListTenantRepositoriesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListTenantRepositoriesResponse {
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