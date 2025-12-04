import { PublicIpInfo } from './PublicIpInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicIpResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'public_ip_list'?: Array<PublicIpInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowPublicIpResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPublicIpList(publicIpList: Array<PublicIpInfo>): ShowPublicIpResponse {
        this['public_ip_list'] = publicIpList;
        return this;
    }
    public set publicIpList(publicIpList: Array<PublicIpInfo>  | undefined) {
        this['public_ip_list'] = publicIpList;
    }
    public get publicIpList(): Array<PublicIpInfo> | undefined {
        return this['public_ip_list'];
    }
}