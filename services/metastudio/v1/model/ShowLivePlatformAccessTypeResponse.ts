import { AccessTypeEnum } from './AccessTypeEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLivePlatformAccessTypeResponse extends SdkResponse {
    private 'access_types'?: Array<AccessTypeEnum>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAccessTypes(accessTypes: Array<AccessTypeEnum>): ShowLivePlatformAccessTypeResponse {
        this['access_types'] = accessTypes;
        return this;
    }
    public set accessTypes(accessTypes: Array<AccessTypeEnum>  | undefined) {
        this['access_types'] = accessTypes;
    }
    public get accessTypes(): Array<AccessTypeEnum> | undefined {
        return this['access_types'];
    }
    public withXRequestId(xRequestId: string): ShowLivePlatformAccessTypeResponse {
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