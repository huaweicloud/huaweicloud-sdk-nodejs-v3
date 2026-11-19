
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventStatisticsResponse extends SdkResponse {
    private 'risky_host_num'?: number;
    private 'risky_container_num'?: number;
    private 'unhandled_num'?: number;
    private 'processed_num'?: number;
    private 'auto_blocked_num'?: number;
    private 'blocked_ip_num'?: number;
    private 'isolated_file_num'?: number;
    private 'support_ES'?: boolean;
    public constructor() { 
        super();
    }
    public withRiskyHostNum(riskyHostNum: number): ShowEventStatisticsResponse {
        this['risky_host_num'] = riskyHostNum;
        return this;
    }
    public set riskyHostNum(riskyHostNum: number  | undefined) {
        this['risky_host_num'] = riskyHostNum;
    }
    public get riskyHostNum(): number | undefined {
        return this['risky_host_num'];
    }
    public withRiskyContainerNum(riskyContainerNum: number): ShowEventStatisticsResponse {
        this['risky_container_num'] = riskyContainerNum;
        return this;
    }
    public set riskyContainerNum(riskyContainerNum: number  | undefined) {
        this['risky_container_num'] = riskyContainerNum;
    }
    public get riskyContainerNum(): number | undefined {
        return this['risky_container_num'];
    }
    public withUnhandledNum(unhandledNum: number): ShowEventStatisticsResponse {
        this['unhandled_num'] = unhandledNum;
        return this;
    }
    public set unhandledNum(unhandledNum: number  | undefined) {
        this['unhandled_num'] = unhandledNum;
    }
    public get unhandledNum(): number | undefined {
        return this['unhandled_num'];
    }
    public withProcessedNum(processedNum: number): ShowEventStatisticsResponse {
        this['processed_num'] = processedNum;
        return this;
    }
    public set processedNum(processedNum: number  | undefined) {
        this['processed_num'] = processedNum;
    }
    public get processedNum(): number | undefined {
        return this['processed_num'];
    }
    public withAutoBlockedNum(autoBlockedNum: number): ShowEventStatisticsResponse {
        this['auto_blocked_num'] = autoBlockedNum;
        return this;
    }
    public set autoBlockedNum(autoBlockedNum: number  | undefined) {
        this['auto_blocked_num'] = autoBlockedNum;
    }
    public get autoBlockedNum(): number | undefined {
        return this['auto_blocked_num'];
    }
    public withBlockedIpNum(blockedIpNum: number): ShowEventStatisticsResponse {
        this['blocked_ip_num'] = blockedIpNum;
        return this;
    }
    public set blockedIpNum(blockedIpNum: number  | undefined) {
        this['blocked_ip_num'] = blockedIpNum;
    }
    public get blockedIpNum(): number | undefined {
        return this['blocked_ip_num'];
    }
    public withIsolatedFileNum(isolatedFileNum: number): ShowEventStatisticsResponse {
        this['isolated_file_num'] = isolatedFileNum;
        return this;
    }
    public set isolatedFileNum(isolatedFileNum: number  | undefined) {
        this['isolated_file_num'] = isolatedFileNum;
    }
    public get isolatedFileNum(): number | undefined {
        return this['isolated_file_num'];
    }
    public withSupportES(supportES: boolean): ShowEventStatisticsResponse {
        this['support_ES'] = supportES;
        return this;
    }
    public set supportES(supportES: boolean  | undefined) {
        this['support_ES'] = supportES;
    }
    public get supportES(): boolean | undefined {
        return this['support_ES'];
    }
}