import { BasePage } from './BasePage';
import { EndpointPermission } from './EndpointPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointPermissionsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public permissions?: Array<EndpointPermission>;
    private 'x-request-id'?: string;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListEndpointPermissionsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListEndpointPermissionsResponse {
        this['total'] = total;
        return this;
    }
    public withPermissions(permissions: Array<EndpointPermission>): ListEndpointPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withXRequestId(xRequestId: string): ListEndpointPermissionsResponse {
        this['x-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['x-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['x-request-id'];
    }
}