import { ImageTaggingItemBody } from './ImageTaggingItemBody';


export class ImageTaggingResponseResult {
    public tags?: Array<ImageTaggingItemBody>;
    public constructor() { 
    }
    public withTags(tags: Array<ImageTaggingItemBody>): ImageTaggingResponseResult {
        this['tags'] = tags;
        return this;
    }
}