
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWtpProtectStatisticsResponse extends SdkResponse {
    private 'protect_host_num'?: number;
    private 'protect_success_host_num'?: number;
    private 'protect_fail_host_num'?: number;
    private 'anti_tampering_num'?: number;
    public constructor() { 
        super();
    }
    public withProtectHostNum(protectHostNum: number): ShowWtpProtectStatisticsResponse {
        this['protect_host_num'] = protectHostNum;
        return this;
    }
    public set protectHostNum(protectHostNum: number  | undefined) {
        this['protect_host_num'] = protectHostNum;
    }
    public get protectHostNum(): number | undefined {
        return this['protect_host_num'];
    }
    public withProtectSuccessHostNum(protectSuccessHostNum: number): ShowWtpProtectStatisticsResponse {
        this['protect_success_host_num'] = protectSuccessHostNum;
        return this;
    }
    public set protectSuccessHostNum(protectSuccessHostNum: number  | undefined) {
        this['protect_success_host_num'] = protectSuccessHostNum;
    }
    public get protectSuccessHostNum(): number | undefined {
        return this['protect_success_host_num'];
    }
    public withProtectFailHostNum(protectFailHostNum: number): ShowWtpProtectStatisticsResponse {
        this['protect_fail_host_num'] = protectFailHostNum;
        return this;
    }
    public set protectFailHostNum(protectFailHostNum: number  | undefined) {
        this['protect_fail_host_num'] = protectFailHostNum;
    }
    public get protectFailHostNum(): number | undefined {
        return this['protect_fail_host_num'];
    }
    public withAntiTamperingNum(antiTamperingNum: number): ShowWtpProtectStatisticsResponse {
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