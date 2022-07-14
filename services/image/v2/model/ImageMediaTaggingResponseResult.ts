import { ImageMediaTaggingItemBody } from './ImageMediaTaggingItemBody';


export class ImageMediaTaggingResponseResult {
    public tags?: Array<ImageMediaTaggingItemBody>;
    public constructor() { 
    }
    public withTags(tags: Array<ImageMediaTaggingItemBody>): ImageMediaTaggingResponseResult {
        this['tags'] = tags;
        return this;
    }
}