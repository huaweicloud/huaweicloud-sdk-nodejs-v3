
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectWatermarkResponse extends SdkResponse {
    public watermark?: boolean;
    private 'can_update'?: boolean;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: boolean): ShowProjectWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
    public withCanUpdate(canUpdate: boolean): ShowProjectWatermarkResponse {
        this['can_update'] = canUpdate;
        return this;
    }
    public set canUpdate(canUpdate: boolean  | undefined) {
        this['can_update'] = canUpdate;
    }
    public get canUpdate(): boolean | undefined {
        return this['can_update'];
    }
}