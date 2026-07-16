import { ServerPublicIp } from './ServerPublicIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BindDevServerPublicIPResponse extends SdkResponse {
    private 'public_ips'?: Array<ServerPublicIp>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPublicIps(publicIps: Array<ServerPublicIp>): BindDevServerPublicIPResponse {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: Array<ServerPublicIp>  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): Array<ServerPublicIp> | undefined {
        return this['public_ips'];
    }
    public withXRequestId(xRequestId: string): BindDevServerPublicIPResponse {
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