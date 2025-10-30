import { WatermarkLocation } from './WatermarkLocation';
import { WordWaterMarkInfo } from './WordWaterMarkInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWatermarkTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: number;
    public description?: string;
    private 'picture_url'?: string;
    public width?: number;
    public height?: number;
    public location?: WatermarkLocation;
    public text?: WordWaterMarkInfo;
    public scene?: UpdateWatermarkTemplateResponseSceneEnum | string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateWatermarkTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: number): UpdateWatermarkTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): UpdateWatermarkTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withPictureUrl(pictureUrl: string): UpdateWatermarkTemplateResponse {
        this['picture_url'] = pictureUrl;
        return this;
    }
    public set pictureUrl(pictureUrl: string  | undefined) {
        this['picture_url'] = pictureUrl;
    }
    public get pictureUrl(): string | undefined {
        return this['picture_url'];
    }
    public withWidth(width: number): UpdateWatermarkTemplateResponse {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): UpdateWatermarkTemplateResponse {
        this['height'] = height;
        return this;
    }
    public withLocation(location: WatermarkLocation): UpdateWatermarkTemplateResponse {
        this['location'] = location;
        return this;
    }
    public withText(text: WordWaterMarkInfo): UpdateWatermarkTemplateResponse {
        this['text'] = text;
        return this;
    }
    public withScene(scene: UpdateWatermarkTemplateResponseSceneEnum | string): UpdateWatermarkTemplateResponse {
        this['scene'] = scene;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateWatermarkTemplateResponse {
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
export enum UpdateWatermarkTemplateResponseSceneEnum {
    CLOUD_LIVE = 'cloud_live',
    MEDIA_LIVE = 'media_live'
}
