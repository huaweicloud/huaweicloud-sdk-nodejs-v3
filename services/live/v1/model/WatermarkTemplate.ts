import { WatermarkLocation } from './WatermarkLocation';
import { WordWaterMarkInfo } from './WordWaterMarkInfo';


export class WatermarkTemplate {
    public name?: string;
    public type?: number;
    public description?: string;
    private 'picture_url'?: string;
    public width?: number;
    public height?: number;
    public location?: WatermarkLocation;
    public text?: WordWaterMarkInfo;
    public scene?: WatermarkTemplateSceneEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): WatermarkTemplate {
        this['name'] = name;
        return this;
    }
    public withType(type: number): WatermarkTemplate {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): WatermarkTemplate {
        this['description'] = description;
        return this;
    }
    public withPictureUrl(pictureUrl: string): WatermarkTemplate {
        this['picture_url'] = pictureUrl;
        return this;
    }
    public set pictureUrl(pictureUrl: string  | undefined) {
        this['picture_url'] = pictureUrl;
    }
    public get pictureUrl(): string | undefined {
        return this['picture_url'];
    }
    public withWidth(width: number): WatermarkTemplate {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): WatermarkTemplate {
        this['height'] = height;
        return this;
    }
    public withLocation(location: WatermarkLocation): WatermarkTemplate {
        this['location'] = location;
        return this;
    }
    public withText(text: WordWaterMarkInfo): WatermarkTemplate {
        this['text'] = text;
        return this;
    }
    public withScene(scene: WatermarkTemplateSceneEnum | string): WatermarkTemplate {
        this['scene'] = scene;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WatermarkTemplateSceneEnum {
    CLOUD_LIVE = 'cloud_live',
    MEDIA_LIVE = 'media_live'
}
