import { ImageToVideoInfo } from './ImageToVideoInfo';


export class ImageToVideoInference {
    private 'image_config': ImageToVideoInfo | undefined;
    public constructor(imageConfig?: any) { 
        this['image_config'] = imageConfig;
    }
    public withImageConfig(imageConfig: ImageToVideoInfo): ImageToVideoInference {
        this['image_config'] = imageConfig;
        return this;
    }
    public set imageConfig(imageConfig: ImageToVideoInfo | undefined) {
        this['image_config'] = imageConfig;
    }
    public get imageConfig() {
        return this['image_config'];
    }
}