import { ManagementUserDto } from './ManagementUserDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagementUsersResponse extends SdkResponse {
    public body?: Array<ManagementUserDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ManagementUserDto>): ListManagementUsersResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListManagementUsersResponse {
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