import { OpenRoomSettingVO } from './OpenRoomSettingVO';


export class OpenRoomSettingReq {
    public roomIntroduce?: string;
    public cropLogoId?: string;
    public coverPictureId?: string;
    public showAudienceMode?: string;
    public isRedoubleOpen?: string;
    public baseAudienceCount?: number;
    public multiple?: number;
    public constructor() { 
    }
    public withRoomIntroduce(roomIntroduce: string): OpenRoomSettingReq {
        this['roomIntroduce'] = roomIntroduce;
        return this;
    }
    public withCropLogoId(cropLogoId: string): OpenRoomSettingReq {
        this['cropLogoId'] = cropLogoId;
        return this;
    }
    public withCoverPictureId(coverPictureId: string): OpenRoomSettingReq {
        this['coverPictureId'] = coverPictureId;
        return this;
    }
    public withShowAudienceMode(showAudienceMode: string): OpenRoomSettingReq {
        this['showAudienceMode'] = showAudienceMode;
        return this;
    }
    public withIsRedoubleOpen(isRedoubleOpen: string): OpenRoomSettingReq {
        this['isRedoubleOpen'] = isRedoubleOpen;
        return this;
    }
    public withBaseAudienceCount(baseAudienceCount: number): OpenRoomSettingReq {
        this['baseAudienceCount'] = baseAudienceCount;
        return this;
    }
    public withMultiple(multiple: number): OpenRoomSettingReq {
        this['multiple'] = multiple;
        return this;
    }
}