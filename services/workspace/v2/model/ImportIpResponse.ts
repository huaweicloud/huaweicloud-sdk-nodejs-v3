import { ImportIpInfo } from './ImportIpInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportIpResponse extends SdkResponse {
    private 'ip_list'?: Array<ImportIpInfo>;
    private 'failed_ip_list'?: Array<ImportIpInfo>;
    private 'failed_code'?: string;
    private 'failed_message'?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withIpList(ipList: Array<ImportIpInfo>): ImportIpResponse {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<ImportIpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<ImportIpInfo> | undefined {
        return this['ip_list'];
    }
    public withFailedIpList(failedIpList: Array<ImportIpInfo>): ImportIpResponse {
        this['failed_ip_list'] = failedIpList;
        return this;
    }
    public set failedIpList(failedIpList: Array<ImportIpInfo>  | undefined) {
        this['failed_ip_list'] = failedIpList;
    }
    public get failedIpList(): Array<ImportIpInfo> | undefined {
        return this['failed_ip_list'];
    }
    public withFailedCode(failedCode: string): ImportIpResponse {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withFailedMessage(failedMessage: string): ImportIpResponse {
        this['failed_message'] = failedMessage;
        return this;
    }
    public set failedMessage(failedMessage: string  | undefined) {
        this['failed_message'] = failedMessage;
    }
    public get failedMessage(): string | undefined {
        return this['failed_message'];
    }
    public withTotalCount(totalCount: number): ImportIpResponse {
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