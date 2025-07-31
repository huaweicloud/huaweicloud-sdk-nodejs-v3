
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaselineScanStatusResponse extends SdkResponse {
    private 'scan_status'?: string;
    private 'scanned_time'?: number;
    public constructor() { 
        super();
    }
    public withScanStatus(scanStatus: string): ShowBaselineScanStatusResponse {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withScannedTime(scannedTime: number): ShowBaselineScanStatusResponse {
        this['scanned_time'] = scannedTime;
        return this;
    }
    public set scannedTime(scannedTime: number  | undefined) {
        this['scanned_time'] = scannedTime;
    }
    public get scannedTime(): number | undefined {
        return this['scanned_time'];
    }
}