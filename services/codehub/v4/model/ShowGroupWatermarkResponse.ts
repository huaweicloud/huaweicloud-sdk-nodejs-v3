
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupWatermarkResponse extends SdkResponse {
    public watermark?: boolean;
    private 'can_update'?: boolean;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: boolean): ShowGroupWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
    public withCanUpdate(canUpdate: boolean): ShowGroupWatermarkResponse {
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