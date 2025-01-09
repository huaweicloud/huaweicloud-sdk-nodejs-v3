import { ExpandVolumeReq } from './ExpandVolumeReq';


export class ExpandDesktopVolumeRequest {
    private 'desktop_id'?: string;
    private 'Service-Transaction-Id'?: string;
    private 'volume_id'?: string;
    public body?: ExpandVolumeReq;
    public constructor(desktopId?: string, volumeId?: string) { 
        this['desktop_id'] = desktopId;
        this['volume_id'] = volumeId;
    }
    public withDesktopId(desktopId: string): ExpandDesktopVolumeRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withServiceTransactionId(serviceTransactionId: string): ExpandDesktopVolumeRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withVolumeId(volumeId: string): ExpandDesktopVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBody(body: ExpandVolumeReq): ExpandDesktopVolumeRequest {
        this['body'] = body;
        return this;
    }
}