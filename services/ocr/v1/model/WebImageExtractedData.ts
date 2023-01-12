import { WebImageContactInfo } from './WebImageContactInfo';
import { WebImageImageSize } from './WebImageImageSize';


export class WebImageExtractedData {
    private 'contact_info'?: WebImageContactInfo | undefined;
    private 'image_size'?: WebImageImageSize | undefined;
    public constructor() { 
    }
    public withContactInfo(contactInfo: WebImageContactInfo): WebImageExtractedData {
        this['contact_info'] = contactInfo;
        return this;
    }
    public set contactInfo(contactInfo: WebImageContactInfo | undefined) {
        this['contact_info'] = contactInfo;
    }
    public get contactInfo() {
        return this['contact_info'];
    }
    public withImageSize(imageSize: WebImageImageSize): WebImageExtractedData {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: WebImageImageSize | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize() {
        return this['image_size'];
    }
}