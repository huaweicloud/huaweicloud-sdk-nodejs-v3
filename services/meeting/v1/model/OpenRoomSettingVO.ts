

export class OpenRoomSettingVO {
    public roomIntroduce?: string;
    public cropLogoId?: string;
    public coverPictureId?: string;
    public showAudienceMode?: string;
    public isRedoubleOpen?: string;
    public baseAudienceCount?: number;
    public multiple?: number;
    public constructor() { 
    }
    public withRoomIntroduce(roomIntroduce: string): OpenRoomSettingVO {
        this['roomIntroduce'] = roomIntroduce;
        return this;
    }
    public withCropLogoId(cropLogoId: string): OpenRoomSettingVO {
        this['cropLogoId'] = cropLogoId;
        return this;
    }
    public withCoverPictureId(coverPictureId: string): OpenRoomSettingVO {
        this['coverPictureId'] = coverPictureId;
        return this;
    }
    public withShowAudienceMode(showAudienceMode: string): OpenRoomSettingVO {
        this['showAudienceMode'] = showAudienceMode;
        return this;
    }
    public withIsRedoubleOpen(isRedoubleOpen: string): OpenRoomSettingVO {
        this['isRedoubleOpen'] = isRedoubleOpen;
        return this;
    }
    public withBaseAudienceCount(baseAudienceCount: number): OpenRoomSettingVO {
        this['baseAudienceCount'] = baseAudienceCount;
        return this;
    }
    public withMultiple(multiple: number): OpenRoomSettingVO {
        this['multiple'] = multiple;
        return this;
    }
}