
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddEndpointPermissionsResponse extends SdkResponse {
    public permissions?: Array<string>;
    private 'x-request-id'?: string;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<string>): AddEndpointPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withXRequestId(xRequestId: string): AddEndpointPermissionsResponse {
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