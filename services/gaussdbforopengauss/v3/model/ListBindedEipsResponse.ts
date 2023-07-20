import { BindedEipResult } from './BindedEipResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBindedEipsResponse extends SdkResponse {
    private 'public_ips'?: Array<BindedEipResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withPublicIps(publicIps: Array<BindedEipResult>): ListBindedEipsResponse {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: Array<BindedEipResult>  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): Array<BindedEipResult> | undefined {
        return this['public_ips'];
    }
    public withTotalCount(totalCount: number): ListBindedEipsResponse {
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