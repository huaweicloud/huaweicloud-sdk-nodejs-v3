

export class MixLayoutPane {
    public id?: number;
    private 'user_id'?: string;
    private 'video_type'?: MixLayoutPaneVideoTypeEnum | string;
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
    public zorder?: number;
    private 'crop_mode'?: MixLayoutPaneCropModeEnum | string;
    private 'filling_policy'?: MixLayoutPaneFillingPolicyEnum | string;
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
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withVideoType(videoType: MixLayoutPaneVideoTypeEnum | string): MixLayoutPane {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: MixLayoutPaneVideoTypeEnum | string  | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType(): MixLayoutPaneVideoTypeEnum | string | undefined {
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
    public withCropMode(cropMode: MixLayoutPaneCropModeEnum | string): MixLayoutPane {
        this['crop_mode'] = cropMode;
        return this;
    }
    public set cropMode(cropMode: MixLayoutPaneCropModeEnum | string  | undefined) {
        this['crop_mode'] = cropMode;
    }
    public get cropMode(): MixLayoutPaneCropModeEnum | string | undefined {
        return this['crop_mode'];
    }
    public withFillingPolicy(fillingPolicy: MixLayoutPaneFillingPolicyEnum | string): MixLayoutPane {
        this['filling_policy'] = fillingPolicy;
        return this;
    }
    public set fillingPolicy(fillingPolicy: MixLayoutPaneFillingPolicyEnum | string  | undefined) {
        this['filling_policy'] = fillingPolicy;
    }
    public get fillingPolicy(): MixLayoutPaneFillingPolicyEnum | string | undefined {
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
