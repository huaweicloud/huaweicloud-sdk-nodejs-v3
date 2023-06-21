

export class MixLayoutPane {
    public id?: number;
    private 'user_id'?: string | undefined;
    private 'video_type'?: MixLayoutPaneVideoTypeEnum | undefined;
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
    public zorder?: number;
    private 'crop_mode'?: MixLayoutPaneCropModeEnum | undefined;
    private 'filling_policy'?: MixLayoutPaneFillingPolicyEnum | undefined;
    public constructor() { 
    }
    public withId(id: number): MixLayoutPane {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): MixLayoutPane {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withVideoType(videoType: MixLayoutPaneVideoTypeEnum): MixLayoutPane {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: MixLayoutPaneVideoTypeEnum | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withX(x: number): MixLayoutPane {
        this['x'] = x;
        return this;
    }
    public withY(y: number): MixLayoutPane {
        this['y'] = y;
        return this;
    }
    public withWidth(width: number): MixLayoutPane {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): MixLayoutPane {
        this['height'] = height;
        return this;
    }
    public withZorder(zorder: number): MixLayoutPane {
        this['zorder'] = zorder;
        return this;
    }
    public withCropMode(cropMode: MixLayoutPaneCropModeEnum): MixLayoutPane {
        this['crop_mode'] = cropMode;
        return this;
    }
    public set cropMode(cropMode: MixLayoutPaneCropModeEnum | undefined) {
        this['crop_mode'] = cropMode;
    }
    public get cropMode() {
        return this['crop_mode'];
    }
    public withFillingPolicy(fillingPolicy: MixLayoutPaneFillingPolicyEnum): MixLayoutPane {
        this['filling_policy'] = fillingPolicy;
        return this;
    }
    public set fillingPolicy(fillingPolicy: MixLayoutPaneFillingPolicyEnum | undefined) {
        this['filling_policy'] = fillingPolicy;
    }
    public get fillingPolicy() {
        return this['filling_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MixLayoutPaneVideoTypeEnum {
    CAMERASTREAM = 'CAMERASTREAM',
    SCREENSTREAM = 'SCREENSTREAM'
}
/**
    * @export
    * @enum {string}
    */
export enum MixLayoutPaneCropModeEnum {
    KEEP_RATIO_PADDING = 'KEEP_RATIO_PADDING',
    KEEP_RATIO_CROP = 'KEEP_RATIO_CROP'
}
/**
    * @export
    * @enum {string}
    */
export enum MixLayoutPaneFillingPolicyEnum {
    FIXED_USER = 'FIXED_USER',
    SHARED_SCREEN = 'SHARED_SCREEN'
}
