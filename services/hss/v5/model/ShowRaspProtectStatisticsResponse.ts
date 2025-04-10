
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRaspProtectStatisticsResponse extends SdkResponse {
    private 'protect_host_num'?: number;
    private 'anti_tampering_num'?: number;
    public constructor() { 
        super();
    }
    public withProtectHostNum(protectHostNum: number): ShowRaspProtectStatisticsResponse {
        this['protect_host_num'] = protectHostNum;
        return this;
    }
    public set protectHostNum(protectHostNum: number  | undefined) {
        this['protect_host_num'] = protectHostNum;
    }
    public get protectHostNum(): number | undefined {
        return this['protect_host_num'];
    }
    public withAntiTamperingNum(antiTamperingNum: number): ShowRaspProtectStatisticsResponse {
        this['anti_tampering_num'] = antiTamperingNum;
        return this;
    }
    public set antiTamperingNum(antiTamperingNum: number  | undefined) {
        this['anti_tampering_num'] = antiTamperingNum;
    }
    public get antiTamperingNum(): number | undefined {
        return this['anti_tampering_num'];
    }
}