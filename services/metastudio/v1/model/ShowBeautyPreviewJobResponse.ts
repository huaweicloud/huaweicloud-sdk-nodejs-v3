
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBeautyPreviewJobResponse extends SdkResponse {
    public state?: ShowBeautyPreviewJobResponseStateEnum | string;
    private 'post_beauty_image_download_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withState(state: ShowBeautyPreviewJobResponseStateEnum | string): ShowBeautyPreviewJobResponse {
        this['state'] = state;
        return this;
    }
    public withPostBeautyImageDownloadUrl(postBeautyImageDownloadUrl: string): ShowBeautyPreviewJobResponse {
        this['post_beauty_image_download_url'] = postBeautyImageDownloadUrl;
        return this;
    }
    public set postBeautyImageDownloadUrl(postBeautyImageDownloadUrl: string  | undefined) {
        this['post_beauty_image_download_url'] = postBeautyImageDownloadUrl;
    }
    public get postBeautyImageDownloadUrl(): string | undefined {
        return this['post_beauty_image_download_url'];
    }
    public withXRequestId(xRequestId: string): ShowBeautyPreviewJobResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBeautyPreviewJobResponseStateEnum {
    WAIT_IMAGE_UPLOAD = 'WAIT_IMAGE_UPLOAD',
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
