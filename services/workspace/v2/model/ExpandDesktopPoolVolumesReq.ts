import { VolumeInfo } from './VolumeInfo';


export class ExpandDesktopPoolVolumesReq {
    private 'order_id'?: string;
    public volumes?: Array<VolumeInfo>;
    public constructor() { 
    }
    public withOrderId(orderId: string): ExpandDesktopPoolVolumesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withVolumes(volumes: Array<VolumeInfo>): ExpandDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}