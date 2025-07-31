
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMultiCloudClusterImageCommandResponse extends SdkResponse {
    private 'image_command'?: string;
    private 'secret_command'?: string;
    private 'images_download_url'?: string;
    public constructor() { 
        super();
    }
    public withImageCommand(imageCommand: string): ShowMultiCloudClusterImageCommandResponse {
        this['image_command'] = imageCommand;
        return this;
    }
    public set imageCommand(imageCommand: string  | undefined) {
        this['image_command'] = imageCommand;
    }
    public get imageCommand(): string | undefined {
        return this['image_command'];
    }
    public withSecretCommand(secretCommand: string): ShowMultiCloudClusterImageCommandResponse {
        this['secret_command'] = secretCommand;
        return this;
    }
    public set secretCommand(secretCommand: string  | undefined) {
        this['secret_command'] = secretCommand;
    }
    public get secretCommand(): string | undefined {
        return this['secret_command'];
    }
    public withImagesDownloadUrl(imagesDownloadUrl: string): ShowMultiCloudClusterImageCommandResponse {
        this['images_download_url'] = imagesDownloadUrl;
        return this;
    }
    public set imagesDownloadUrl(imagesDownloadUrl: string  | undefined) {
        this['images_download_url'] = imagesDownloadUrl;
    }
    public get imagesDownloadUrl(): string | undefined {
        return this['images_download_url'];
    }
}