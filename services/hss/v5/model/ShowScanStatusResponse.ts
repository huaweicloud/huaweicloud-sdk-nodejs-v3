
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScanStatusResponse extends SdkResponse {
    private 'scan_status'?: string;
    private 'scaned_time'?: number;
    public constructor() { 
        super();
    }
    public withScanStatus(scanStatus: string): ShowScanStatusResponse {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withScanedTime(scanedTime: number): ShowScanStatusResponse {
        this['scaned_time'] = scanedTime;
        return this;
    }
    public set scanedTime(scanedTime: number  | undefined) {
        this['scaned_time'] = scanedTime;
    }
    public get scanedTime(): number | undefined {
        return this['scaned_time'];
    }
}