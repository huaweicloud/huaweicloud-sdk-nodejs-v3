import { WatermarkLocation } from './WatermarkLocation';
import { WordWaterMarkInfo } from './WordWaterMarkInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWatermarkTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: number;
    public description?: string;
    private 'picture_url'?: string;
    public width?: number;
    public height?: number;
    public location?: WatermarkLocation;
    public text?: WordWaterMarkInfo;
    public scene?: CreateWatermarkTemplateResponseSceneEnum | string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateWatermarkTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: number): CreateWatermarkTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): CreateWatermarkTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withPictureUrl(pictureUrl: string): CreateWatermarkTemplateResponse {
        this['picture_url'] = pictureUrl;
        return this;
    }
    public set pictureUrl(pictureUrl: string  | undefined) {
        this['picture_url'] = pictureUrl;
    }
    public get pictureUrl(): string | undefined {
        return this['picture_url'];
    }
    public withWidth(width: number): CreateWatermarkTemplateResponse {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): CreateWatermarkTemplateResponse {
        this['height'] = height;
        return this;
    }
    public withLocation(location: WatermarkLocation): CreateWatermarkTemplateResponse {
        this['location'] = location;
        return this;
    }
    public withText(text: WordWaterMarkInfo): CreateWatermarkTemplateResponse {
        this['text'] = text;
        return this;
    }
    public withScene(scene: CreateWatermarkTemplateResponseSceneEnum | string): CreateWatermarkTemplateResponse {
        this['scene'] = scene;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateWatermarkTemplateResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateWatermarkTemplateResponseSceneEnum {
    CLOUD_LIVE = 'cloud_live',
    MEDIA_LIVE = 'media_live'
}
