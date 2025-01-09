import { VolumeAddInfo } from './VolumeAddInfo';


export class AddDesktopPoolVolumesReq {
    private 'order_id'?: string;
    public volumes?: Array<VolumeAddInfo>;
    public constructor() { 
    }
    public withOrderId(orderId: string): AddDesktopPoolVolumesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withVolumes(volumes: Array<VolumeAddInfo>): AddDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}