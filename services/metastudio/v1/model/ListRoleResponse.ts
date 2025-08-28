import { Pages } from './Pages';
import { RoleInfo } from './RoleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRoleResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<RoleInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListRoleResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRoleResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListRoleResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<RoleInfo>): ListRoleResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRoleResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}