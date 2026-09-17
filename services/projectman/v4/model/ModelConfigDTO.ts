import { BaseCategory } from './BaseCategory';
import { CategoryLayerDTO } from './CategoryLayerDTO';


export class ModelConfigDTO {
    public categories?: Array<BaseCategory>;
    private 'category_layer_config'?: Array<CategoryLayerDTO>;
    private 'feature_page_link_template'?: string;
    public constructor() { 
    }
    public withCategories(categories: Array<BaseCategory>): ModelConfigDTO {
        this['categories'] = categories;
        return this;
    }
    public withCategoryLayerConfig(categoryLayerConfig: Array<CategoryLayerDTO>): ModelConfigDTO {
        this['category_layer_config'] = categoryLayerConfig;
        return this;
    }
    public set categoryLayerConfig(categoryLayerConfig: Array<CategoryLayerDTO>  | undefined) {
        this['category_layer_config'] = categoryLayerConfig;
    }
    public get categoryLayerConfig(): Array<CategoryLayerDTO> | undefined {
        return this['category_layer_config'];
    }
    public withFeaturePageLinkTemplate(featurePageLinkTemplate: string): ModelConfigDTO {
        this['feature_page_link_template'] = featurePageLinkTemplate;
        return this;
    }
    public set featurePageLinkTemplate(featurePageLinkTemplate: string  | undefined) {
        this['feature_page_link_template'] = featurePageLinkTemplate;
    }
    public get featurePageLinkTemplate(): string | undefined {
        return this['feature_page_link_template'];
    }
}