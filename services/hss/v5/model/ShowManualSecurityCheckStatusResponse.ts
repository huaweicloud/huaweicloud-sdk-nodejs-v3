
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowManualSecurityCheckStatusResponse extends SdkResponse {
    private 'scan_status'?: ShowManualSecurityCheckStatusResponseScanStatusEnum | string;
    private 'total_host_num'?: number;
    private 'scaned_host_num'?: number;
    private 'content_num'?: number;
    private 'scan_progress'?: number;
    public constructor() { 
        super();
    }
    public withScanStatus(scanStatus: ShowManualSecurityCheckStatusResponseScanStatusEnum | string): ShowManualSecurityCheckStatusResponse {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: ShowManualSecurityCheckStatusResponseScanStatusEnum | string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): ShowManualSecurityCheckStatusResponseScanStatusEnum | string | undefined {
        return this['scan_status'];
    }
    public withTotalHostNum(totalHostNum: number): ShowManualSecurityCheckStatusResponse {
        this['total_host_num'] = totalHostNum;
        return this;
    }
    public set totalHostNum(totalHostNum: number  | undefined) {
        this['total_host_num'] = totalHostNum;
    }
    public get totalHostNum(): number | undefined {
        return this['total_host_num'];
    }
    public withScanedHostNum(scanedHostNum: number): ShowManualSecurityCheckStatusResponse {
        this['scaned_host_num'] = scanedHostNum;
        return this;
    }
    public set scanedHostNum(scanedHostNum: number  | undefined) {
        this['scaned_host_num'] = scanedHostNum;
    }
    public get scanedHostNum(): number | undefined {
        return this['scaned_host_num'];
    }
    public withContentNum(contentNum: number): ShowManualSecurityCheckStatusResponse {
        this['content_num'] = contentNum;
        return this;
    }
    public set contentNum(contentNum: number  | undefined) {
        this['content_num'] = contentNum;
    }
    public get contentNum(): number | undefined {
        return this['content_num'];
    }
    public withScanProgress(scanProgress: number): ShowManualSecurityCheckStatusResponse {
        this['scan_progress'] = scanProgress;
        return this;
    }
    public set scanProgress(scanProgress: number  | undefined) {
        this['scan_progress'] = scanProgress;
    }
    public get scanProgress(): number | undefined {
        return this['scan_progress'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowManualSecurityCheckStatusResponseScanStatusEnum {
    SCANNING = 'scanning',
    SCANED = 'scaned',
    FAILED = 'failed'
}
