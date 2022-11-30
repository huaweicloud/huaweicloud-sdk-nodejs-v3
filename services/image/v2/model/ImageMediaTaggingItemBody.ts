import { ImageMediaTaggingItemBodyI18nTag } from './ImageMediaTaggingItemBodyI18nTag';
import { ImageMediaTaggingItemBodyI18nType } from './ImageMediaTaggingItemBodyI18nType';
import { ImageTaggingInstance } from './ImageTaggingInstance';


export class ImageMediaTaggingItemBody {
    public confidence?: string;
    public type?: string;
    public tag?: string;
    private 'i18n_tag'?: ImageMediaTaggingItemBodyI18nTag | undefined;
    private 'i18n_type'?: ImageMediaTaggingItemBodyI18nType | undefined;
    public instances?: Array<ImageTaggingInstance>;
    public constructor() { 
    }
    public withConfidence(confidence: string): ImageMediaTaggingItemBody {
        this['confidence'] = confidence;
        return this;
    }
    public withType(type: string): ImageMediaTaggingItemBody {
        this['type'] = type;
        return this;
    }
    public withTag(tag: string): ImageMediaTaggingItemBody {
        this['tag'] = tag;
        return this;
    }
    public withI18nTag(i18nTag: ImageMediaTaggingItemBodyI18nTag): ImageMediaTaggingItemBody {
        this['i18n_tag'] = i18nTag;
        return this;
    }
    public set i18nTag(i18nTag: ImageMediaTaggingItemBodyI18nTag | undefined) {
        this['i18n_tag'] = i18nTag;
    }
    public get i18nTag() {
        return this['i18n_tag'];
    }
    public withI18nType(i18nType: ImageMediaTaggingItemBodyI18nType): ImageMediaTaggingItemBody {
        this['i18n_type'] = i18nType;
        return this;
    }
    public set i18nType(i18nType: ImageMediaTaggingItemBodyI18nType | undefined) {
        this['i18n_type'] = i18nType;
    }
    public get i18nType() {
        return this['i18n_type'];
    }
    public withInstances(instances: Array<ImageTaggingInstance>): ImageMediaTaggingItemBody {
        this['instances'] = instances;
        return this;
    }
}