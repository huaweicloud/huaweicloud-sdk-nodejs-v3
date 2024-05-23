
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPasswordlessConfigResponse extends SdkResponse {
    private 'config_ips'?: Array<string>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withConfigIps(configIps: Array<string>): ShowPasswordlessConfigResponse {
        this['config_ips'] = configIps;
        return this;
    }
    public set configIps(configIps: Array<string>  | undefined) {
        this['config_ips'] = configIps;
    }
    public get configIps(): Array<string> | undefined {
        return this['config_ips'];
    }
    public withTotalCount(totalCount: number): ShowPasswordlessConfigResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}