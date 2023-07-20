import { ImageTaggingInstance } from './ImageTaggingInstance';
import { ImageTaggingItemBodyI18nTag } from './ImageTaggingItemBodyI18nTag';
import { ImageTaggingItemBodyI18nType } from './ImageTaggingItemBodyI18nType';


export class ImageTaggingItemBody {
    public confidence?: string;
    public type?: string;
    public tag?: string;
    private 'i18n_tag'?: ImageTaggingItemBodyI18nTag;
    private 'i18n_type'?: ImageTaggingItemBodyI18nType;
    public instances?: Array<ImageTaggingInstance>;
    public constructor() { 
    }
    public withConfidence(confidence: string): ImageTaggingItemBody {
        this['confidence'] = confidence;
        return this;
    }
    public withType(type: string): ImageTaggingItemBody {
        this['type'] = type;
        return this;
    }
    public withTag(tag: string): ImageTaggingItemBody {
        this['tag'] = tag;
        return this;
    }
    public withI18nTag(i18nTag: ImageTaggingItemBodyI18nTag): ImageTaggingItemBody {
        this['i18n_tag'] = i18nTag;
        return this;
    }
    public set i18nTag(i18nTag: ImageTaggingItemBodyI18nTag  | undefined) {
        this['i18n_tag'] = i18nTag;
    }
    public get i18nTag(): ImageTaggingItemBodyI18nTag | undefined {
        return this['i18n_tag'];
    }
    public withI18nType(i18nType: ImageTaggingItemBodyI18nType): ImageTaggingItemBody {
        this['i18n_type'] = i18nType;
        return this;
    }
    public set i18nType(i18nType: ImageTaggingItemBodyI18nType  | undefined) {
        this['i18n_type'] = i18nType;
    }
    public get i18nType(): ImageTaggingItemBodyI18nType | undefined {
        return this['i18n_type'];
    }
    public withInstances(instances: Array<ImageTaggingInstance>): ImageTaggingItemBody {
        this['instances'] = instances;
        return this;
    }
}