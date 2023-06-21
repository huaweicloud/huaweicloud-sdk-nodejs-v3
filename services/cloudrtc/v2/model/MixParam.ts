import { MixLayoutPane } from './MixLayoutPane';
import { MixUserBackgroundImage } from './MixUserBackgroundImage';


export class MixParam {
    private 'room_id': string | undefined;
    private 'encode_template': MixParamEncodeTemplateEnum | undefined;
    private 'max_idle_time'?: number | undefined;
    private 'layout_template'?: string | undefined;
    private 'default_user_background_image'?: string | undefined;
    private 'screen_background_image'?: string | undefined;
    private 'background_image'?: string | undefined;
    private 'layout_panes'?: Array<MixLayoutPane> | undefined;
    private 'user_background_images'?: Array<MixUserBackgroundImage> | undefined;
    public constructor(roomId?: any, encodeTemplate?: any) { 
        this['room_id'] = roomId;
        this['encode_template'] = encodeTemplate;
    }
    public withRoomId(roomId: string): MixParam {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withEncodeTemplate(encodeTemplate: MixParamEncodeTemplateEnum): MixParam {
        this['encode_template'] = encodeTemplate;
        return this;
    }
    public set encodeTemplate(encodeTemplate: MixParamEncodeTemplateEnum | undefined) {
        this['encode_template'] = encodeTemplate;
    }
    public get encodeTemplate() {
        return this['encode_template'];
    }
    public withMaxIdleTime(maxIdleTime: number): MixParam {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime() {
        return this['max_idle_time'];
    }
    public withLayoutTemplate(layoutTemplate: string): MixParam {
        this['layout_template'] = layoutTemplate;
        return this;
    }
    public set layoutTemplate(layoutTemplate: string | undefined) {
        this['layout_template'] = layoutTemplate;
    }
    public get layoutTemplate() {
        return this['layout_template'];
    }
    public withDefaultUserBackgroundImage(defaultUserBackgroundImage: string): MixParam {
        this['default_user_background_image'] = defaultUserBackgroundImage;
        return this;
    }
    public set defaultUserBackgroundImage(defaultUserBackgroundImage: string | undefined) {
        this['default_user_background_image'] = defaultUserBackgroundImage;
    }
    public get defaultUserBackgroundImage() {
        return this['default_user_background_image'];
    }
    public withScreenBackgroundImage(screenBackgroundImage: string): MixParam {
        this['screen_background_image'] = screenBackgroundImage;
        return this;
    }
    public set screenBackgroundImage(screenBackgroundImage: string | undefined) {
        this['screen_background_image'] = screenBackgroundImage;
    }
    public get screenBackgroundImage() {
        return this['screen_background_image'];
    }
    public withBackgroundImage(backgroundImage: string): MixParam {
        this['background_image'] = backgroundImage;
        return this;
    }
    public set backgroundImage(backgroundImage: string | undefined) {
        this['background_image'] = backgroundImage;
    }
    public get backgroundImage() {
        return this['background_image'];
    }
    public withLayoutPanes(layoutPanes: Array<MixLayoutPane>): MixParam {
        this['layout_panes'] = layoutPanes;
        return this;
    }
    public set layoutPanes(layoutPanes: Array<MixLayoutPane> | undefined) {
        this['layout_panes'] = layoutPanes;
    }
    public get layoutPanes() {
        return this['layout_panes'];
    }
    public withUserBackgroundImages(userBackgroundImages: Array<MixUserBackgroundImage>): MixParam {
        this['user_background_images'] = userBackgroundImages;
        return this;
    }
    public set userBackgroundImages(userBackgroundImages: Array<MixUserBackgroundImage> | undefined) {
        this['user_background_images'] = userBackgroundImages;
    }
    public get userBackgroundImages() {
        return this['user_background_images'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MixParamEncodeTemplateEnum {
    E_19201080_30_4620 = '1920*1080_30_4620',
    E_19201080_30_3150 = '1920*1080_30_3150',
    E_19201080_15_3460 = '1920*1080_15_3460',
    E_19201080_15_2080 = '1920*1080_15_2080',
    E_1280720_30_3420 = '1280*720_30_3420',
    E_1280720_30_1710 = '1280*720_30_1710',
    E_1280720_15_2260 = '1280*720_15_2260',
    E_1280720_15_1130 = '1280*720_15_1130',
    E_640480_30_1000 = '640*480_30_1000',
    E_640480_30_1500 = '640*480_30_1500',
    E_640480_15_500 = '640*480_15_500',
    E_480360_30_490 = '480*360_30_490',
    E_480360_15_320 = '480*360_15_320'
}
