import { OpenRoomSettingVO } from './OpenRoomSettingVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRoomSettingResponse extends SdkResponse {
    public roomIntroduce?: string;
    public cropLogoId?: string;
    public coverPictureId?: string;
    public showAudienceMode?: string;
    public isRedoubleOpen?: string;
    public baseAudienceCount?: number;
    public multiple?: number;
    public constructor() { 
        super();
    }
    public withRoomIntroduce(roomIntroduce: string): ShowRoomSettingResponse {
        this['roomIntroduce'] = roomIntroduce;
        return this;
    }
    public withCropLogoId(cropLogoId: string): ShowRoomSettingResponse {
        this['cropLogoId'] = cropLogoId;
        return this;
    }
    public withCoverPictureId(coverPictureId: string): ShowRoomSettingResponse {
        this['coverPictureId'] = coverPictureId;
        return this;
    }
    public withShowAudienceMode(showAudienceMode: string): ShowRoomSettingResponse {
        this['showAudienceMode'] = showAudienceMode;
        return this;
    }
    public withIsRedoubleOpen(isRedoubleOpen: string): ShowRoomSettingResponse {
        this['isRedoubleOpen'] = isRedoubleOpen;
        return this;
    }
    public withBaseAudienceCount(baseAudienceCount: number): ShowRoomSettingResponse {
        this['baseAudienceCount'] = baseAudienceCount;
        return this;
    }
    public withMultiple(multiple: number): ShowRoomSettingResponse {
        this['multiple'] = multiple;
        return this;
    }
}