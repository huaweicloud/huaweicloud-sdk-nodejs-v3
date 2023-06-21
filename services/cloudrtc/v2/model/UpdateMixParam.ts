import { MixLayoutPane } from './MixLayoutPane';
import { MixUserBackgroundImage } from './MixUserBackgroundImage';


export class UpdateMixParam {
    private 'layout_template'?: string | undefined;
    private 'background_image'?: string | undefined;
    private 'default_user_background_image'?: string | undefined;
    private 'screen_background_image'?: string | undefined;
    private 'max_idle_time'?: number | undefined;
    private 'layout_panes'?: Array<MixLayoutPane> | undefined;
    private 'user_background_images'?: Array<MixUserBackgroundImage> | undefined;
    public constructor() { 
    }
    public withLayoutTemplate(layoutTemplate: string): UpdateMixParam {
        this['layout_template'] = layoutTemplate;
        return this;
    }
    public set layoutTemplate(layoutTemplate: string | undefined) {
        this['layout_template'] = layoutTemplate;
    }
    public get layoutTemplate() {
        return this['layout_template'];
    }
    public withBackgroundImage(backgroundImage: string): UpdateMixParam {
        this['background_image'] = backgroundImage;
        return this;
    }
    public set backgroundImage(backgroundImage: string | undefined) {
        this['background_image'] = backgroundImage;
    }
    public get backgroundImage() {
        return this['background_image'];
    }
    public withDefaultUserBackgroundImage(defaultUserBackgroundImage: string): UpdateMixParam {
        this['default_user_background_image'] = defaultUserBackgroundImage;
        return this;
    }
    public set defaultUserBackgroundImage(defaultUserBackgroundImage: string | undefined) {
        this['default_user_background_image'] = defaultUserBackgroundImage;
    }
    public get defaultUserBackgroundImage() {
        return this['default_user_background_image'];
    }
    public withScreenBackgroundImage(screenBackgroundImage: string): UpdateMixParam {
        this['screen_background_image'] = screenBackgroundImage;
        return this;
    }
    public set screenBackgroundImage(screenBackgroundImage: string | undefined) {
        this['screen_background_image'] = screenBackgroundImage;
    }
    public get screenBackgroundImage() {
        return this['screen_background_image'];
    }
    public withMaxIdleTime(maxIdleTime: number): UpdateMixParam {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime() {
        return this['max_idle_time'];
    }
    public withLayoutPanes(layoutPanes: Array<MixLayoutPane>): UpdateMixParam {
        this['layout_panes'] = layoutPanes;
        return this;
    }
    public set layoutPanes(layoutPanes: Array<MixLayoutPane> | undefined) {
        this['layout_panes'] = layoutPanes;
    }
    public get layoutPanes() {
        return this['layout_panes'];
    }
    public withUserBackgroundImages(userBackgroundImages: Array<MixUserBackgroundImage>): UpdateMixParam {
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