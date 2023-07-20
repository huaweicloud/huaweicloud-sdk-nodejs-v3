import { WebImageContactInfo } from './WebImageContactInfo';
import { WebImageImageSize } from './WebImageImageSize';


export class WebImageExtractedData {
    private 'contact_info'?: WebImageContactInfo;
    private 'image_size'?: WebImageImageSize;
    public constructor() { 
    }
    public withContactInfo(contactInfo: WebImageContactInfo): WebImageExtractedData {
        this['contact_info'] = contactInfo;
        return this;
    }
    public set contactInfo(contactInfo: WebImageContactInfo  | undefined) {
        this['contact_info'] = contactInfo;
    }
    public get contactInfo(): WebImageContactInfo | undefined {
        return this['contact_info'];
    }
    public withImageSize(imageSize: WebImageImageSize): WebImageExtractedData {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: WebImageImageSize  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): WebImageImageSize | undefined {
        return this['image_size'];
    }
}