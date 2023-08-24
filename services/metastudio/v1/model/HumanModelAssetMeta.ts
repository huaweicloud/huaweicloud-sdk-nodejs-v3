import { ComponentInfo } from './ComponentInfo';
import { HumanModelMetaProperties } from './HumanModelMetaProperties';


export class HumanModelAssetMeta {
    private 'style_id'?: string;
    private 'modeling_type'?: HumanModelAssetMetaModelingTypeEnum | string;
    private 'modeling_job_id'?: string;
    private 'model_properties'?: HumanModelMetaProperties;
    public components?: Array<ComponentInfo>;
    public constructor() { 
    }
    public withStyleId(styleId: string): HumanModelAssetMeta {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withModelingType(modelingType: HumanModelAssetMetaModelingTypeEnum | string): HumanModelAssetMeta {
        this['modeling_type'] = modelingType;
        return this;
    }
    public set modelingType(modelingType: HumanModelAssetMetaModelingTypeEnum | string  | undefined) {
        this['modeling_type'] = modelingType;
    }
    public get modelingType(): HumanModelAssetMetaModelingTypeEnum | string | undefined {
        return this['modeling_type'];
    }
    public withModelingJobId(modelingJobId: string): HumanModelAssetMeta {
        this['modeling_job_id'] = modelingJobId;
        return this;
    }
    public set modelingJobId(modelingJobId: string  | undefined) {
        this['modeling_job_id'] = modelingJobId;
    }
    public get modelingJobId(): string | undefined {
        return this['modeling_job_id'];
    }
    public withModelProperties(modelProperties: HumanModelMetaProperties): HumanModelAssetMeta {
        this['model_properties'] = modelProperties;
        return this;
    }
    public set modelProperties(modelProperties: HumanModelMetaProperties  | undefined) {
        this['model_properties'] = modelProperties;
    }
    public get modelProperties(): HumanModelMetaProperties | undefined {
        return this['model_properties'];
    }
    public withComponents(components: Array<ComponentInfo>): HumanModelAssetMeta {
        this['components'] = components;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HumanModelAssetMetaModelingTypeEnum {
    UPLOADED = 'UPLOADED',
    PICTURE_MODELING = 'PICTURE_MODELING',
    CHARACTER_CUSTOMIZATION_MODELING = 'CHARACTER_CUSTOMIZATION_MODELING'
}
