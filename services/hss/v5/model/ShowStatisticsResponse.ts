
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticsResponse extends SdkResponse {
    private 'vault_host_num'?: number;
    private 'rasp_host_num'?: number;
    private 'wtp_host_num'?: number;
    private 'two_factor_host_num'?: number;
    private 'isolated_file_num'?: number;
    private 'support_two_factor_host_num'?: number;
    private 'app_process_host_num'?: number;
    public constructor() { 
        super();
    }
    public withVaultHostNum(vaultHostNum: number): ShowStatisticsResponse {
        this['vault_host_num'] = vaultHostNum;
        return this;
    }
    public set vaultHostNum(vaultHostNum: number  | undefined) {
        this['vault_host_num'] = vaultHostNum;
    }
    public get vaultHostNum(): number | undefined {
        return this['vault_host_num'];
    }
    public withRaspHostNum(raspHostNum: number): ShowStatisticsResponse {
        this['rasp_host_num'] = raspHostNum;
        return this;
    }
    public set raspHostNum(raspHostNum: number  | undefined) {
        this['rasp_host_num'] = raspHostNum;
    }
    public get raspHostNum(): number | undefined {
        return this['rasp_host_num'];
    }
    public withWtpHostNum(wtpHostNum: number): ShowStatisticsResponse {
        this['wtp_host_num'] = wtpHostNum;
        return this;
    }
    public set wtpHostNum(wtpHostNum: number  | undefined) {
        this['wtp_host_num'] = wtpHostNum;
    }
    public get wtpHostNum(): number | undefined {
        return this['wtp_host_num'];
    }
    public withTwoFactorHostNum(twoFactorHostNum: number): ShowStatisticsResponse {
        this['two_factor_host_num'] = twoFactorHostNum;
        return this;
    }
    public set twoFactorHostNum(twoFactorHostNum: number  | undefined) {
        this['two_factor_host_num'] = twoFactorHostNum;
    }
    public get twoFactorHostNum(): number | undefined {
        return this['two_factor_host_num'];
    }
    public withIsolatedFileNum(isolatedFileNum: number): ShowStatisticsResponse {
        this['isolated_file_num'] = isolatedFileNum;
        return this;
    }
    public set isolatedFileNum(isolatedFileNum: number  | undefined) {
        this['isolated_file_num'] = isolatedFileNum;
    }
    public get isolatedFileNum(): number | undefined {
        return this['isolated_file_num'];
    }
    public withSupportTwoFactorHostNum(supportTwoFactorHostNum: number): ShowStatisticsResponse {
        this['support_two_factor_host_num'] = supportTwoFactorHostNum;
        return this;
    }
    public set supportTwoFactorHostNum(supportTwoFactorHostNum: number  | undefined) {
        this['support_two_factor_host_num'] = supportTwoFactorHostNum;
    }
    public get supportTwoFactorHostNum(): number | undefined {
        return this['support_two_factor_host_num'];
    }
    public withAppProcessHostNum(appProcessHostNum: number): ShowStatisticsResponse {
        this['app_process_host_num'] = appProcessHostNum;
        return this;
    }
    public set appProcessHostNum(appProcessHostNum: number  | undefined) {
        this['app_process_host_num'] = appProcessHostNum;
    }
    public get appProcessHostNum(): number | undefined {
        return this['app_process_host_num'];
    }
}