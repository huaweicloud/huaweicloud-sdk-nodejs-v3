
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageUploadCommandResponse extends SdkResponse {
    private 'image_command'?: string;
    private 'images_download_url'?: string;
    private 'swr_image_pull_command'?: string;
    public constructor() { 
        super();
    }
    public withImageCommand(imageCommand: string): ShowImageUploadCommandResponse {
        this['image_command'] = imageCommand;
        return this;
    }
    public set imageCommand(imageCommand: string  | undefined) {
        this['image_command'] = imageCommand;
    }
    public get imageCommand(): string | undefined {
        return this['image_command'];
    }
    public withImagesDownloadUrl(imagesDownloadUrl: string): ShowImageUploadCommandResponse {
        this['images_download_url'] = imagesDownloadUrl;
        return this;
    }
    public set imagesDownloadUrl(imagesDownloadUrl: string  | undefined) {
        this['images_download_url'] = imagesDownloadUrl;
    }
    public get imagesDownloadUrl(): string | undefined {
        return this['images_download_url'];
    }
    public withSwrImagePullCommand(swrImagePullCommand: string): ShowImageUploadCommandResponse {
        this['swr_image_pull_command'] = swrImagePullCommand;
        return this;
    }
    public set swrImagePullCommand(swrImagePullCommand: string  | undefined) {
        this['swr_image_pull_command'] = swrImagePullCommand;
    }
    public get swrImagePullCommand(): string | undefined {
        return this['swr_image_pull_command'];
    }
}