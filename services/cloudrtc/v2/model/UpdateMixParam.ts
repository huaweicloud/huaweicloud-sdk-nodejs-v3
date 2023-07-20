import { MixLayoutPane } from './MixLayoutPane';
import { MixUserBackgroundImage } from './MixUserBackgroundImage';


export class UpdateMixParam {
    private 'layout_template'?: string;
    private 'background_image'?: string;
    private 'default_user_background_image'?: string;
    private 'screen_background_image'?: string;
    private 'max_idle_time'?: number;
    private 'layout_panes'?: Array<MixLayoutPane>;
    private 'user_background_images'?: Array<MixUserBackgroundImage>;
    public constructor() { 
    }
    public withLayoutTemplate(layoutTemplate: string): UpdateMixParam {
        this['layout_template'] = layoutTemplate;
        return this;
    }
    public set layoutTemplate(layoutTemplate: string  | undefined) {
        this['layout_template'] = layoutTemplate;
    }
    public get layoutTemplate(): string | undefined {
        return this['layout_template'];
    }
    public withBackgroundImage(backgroundImage: string): UpdateMixParam {
        this['background_image'] = backgroundImage;
        return this;
    }
    public set backgroundImage(backgroundImage: string  | undefined) {
        this['background_image'] = backgroundImage;
    }
    public get backgroundImage(): string | undefined {
        return this['background_image'];
    }
    public withDefaultUserBackgroundImage(defaultUserBackgroundImage: string): UpdateMixParam {
        this['default_user_background_image'] = defaultUserBackgroundImage;
        return this;
    }
    public set defaultUserBackgroundImage(defaultUserBackgroundImage: string  | undefined) {
        this['default_user_background_image'] = defaultUserBackgroundImage;
    }
    public get defaultUserBackgroundImage(): string | undefined {
        return this['default_user_background_image'];
    }
    public withScreenBackgroundImage(screenBackgroundImage: string): UpdateMixParam {
        this['screen_background_image'] = screenBackgroundImage;
        return this;
    }
    public set screenBackgroundImage(screenBackgroundImage: string  | undefined) {
        this['screen_background_image'] = screenBackgroundImage;
    }
    public get screenBackgroundImage(): string | undefined {
        return this['screen_background_image'];
    }
    public withMaxIdleTime(maxIdleTime: number): UpdateMixParam {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number  | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime(): number | undefined {
        return this['max_idle_time'];
    }
    public withLayoutPanes(layoutPanes: Array<MixLayoutPane>): UpdateMixParam {
        this['layout_panes'] = layoutPanes;
        return this;
    }
    public set layoutPanes(layoutPanes: Array<MixLayoutPane>  | undefined) {
        this['layout_panes'] = layoutPanes;
    }
    public get layoutPanes(): Array<MixLayoutPane> | undefined {
        return this['layout_panes'];
    }
    public withUserBackgroundImages(userBackgroundImages: Array<MixUserBackgroundImage>): UpdateMixParam {
        this['user_background_images'] = userBackgroundImages;
        return this;
    }
    public set userBackgroundImages(userBackgroundImages: Array<MixUserBackgroundImage>  | undefined) {
        this['user_background_images'] = userBackgroundImages;
    }
    public get userBackgroundImages(): Array<MixUserBackgroundImage> | undefined {
        return this['user_background_images'];
    }
}