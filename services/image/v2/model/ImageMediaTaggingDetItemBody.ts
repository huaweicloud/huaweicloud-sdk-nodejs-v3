import { ImageMediaTaggingDetInstance } from './ImageMediaTaggingDetInstance';
import { ImageMediaTaggingDetItemBodyI18nTag } from './ImageMediaTaggingDetItemBodyI18nTag';


export class ImageMediaTaggingDetItemBody {
    public confidence?: string;
    public type?: string;
    public tag?: string;
    private 'i18n_tag'?: ImageMediaTaggingDetItemBodyI18nTag | undefined;
    public instances?: Array<ImageMediaTaggingDetInstance>;
    public constructor() { 
    }
    public withConfidence(confidence: string): ImageMediaTaggingDetItemBody {
        this['confidence'] = confidence;
        return this;
    }
    public withType(type: string): ImageMediaTaggingDetItemBody {
        this['type'] = type;
        return this;
    }
    public withTag(tag: string): ImageMediaTaggingDetItemBody {
        this['tag'] = tag;
        return this;
    }
    public withI18nTag(i18nTag: ImageMediaTaggingDetItemBodyI18nTag): ImageMediaTaggingDetItemBody {
        this['i18n_tag'] = i18nTag;
        return this;
    }
    public set i18nTag(i18nTag: ImageMediaTaggingDetItemBodyI18nTag | undefined) {
        this['i18n_tag'] = i18nTag;
    }
    public get i18nTag() {
        return this['i18n_tag'];
    }
    public withInstances(instances: Array<ImageMediaTaggingDetInstance>): ImageMediaTaggingDetItemBody {
        this['instances'] = instances;
        return this;
    }
}