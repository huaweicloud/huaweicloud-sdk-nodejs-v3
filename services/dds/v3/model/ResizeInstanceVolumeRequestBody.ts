import { ResizeInstanceVolumeOption } from './ResizeInstanceVolumeOption';


export class ResizeInstanceVolumeRequestBody {
    public volume?: ResizeInstanceVolumeOption;
    private 'is_auto_pay'?: boolean;
    public constructor(volume?: ResizeInstanceVolumeOption) { 
        this['volume'] = volume;
    }
    public withVolume(volume: ResizeInstanceVolumeOption): ResizeInstanceVolumeRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): ResizeInstanceVolumeRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
}