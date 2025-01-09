import { Volume } from './Volume';


export class AddDesktopVolumesReq {
    private 'desktop_id'?: string;
    private 'order_id'?: string;
    public volumes?: Array<Volume>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): AddDesktopVolumesReq {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withOrderId(orderId: string): AddDesktopVolumesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withVolumes(volumes: Array<Volume>): AddDesktopVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}