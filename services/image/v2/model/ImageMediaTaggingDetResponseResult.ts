import { ImageMediaTaggingDetItemBody } from './ImageMediaTaggingDetItemBody';


export class ImageMediaTaggingDetResponseResult {
    public tags?: Array<ImageMediaTaggingDetItemBody>;
    public constructor() { 
    }
    public withTags(tags: Array<ImageMediaTaggingDetItemBody>): ImageMediaTaggingDetResponseResult {
        this['tags'] = tags;
        return this;
    }
}