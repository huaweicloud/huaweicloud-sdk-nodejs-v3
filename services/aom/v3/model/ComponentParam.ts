

export class ComponentParam {
    public description?: string;
    private 'model_id'?: string;
    private 'model_type'?: ComponentParamModelTypeEnum | string;
    public name?: string;
    public constructor(modelId?: string, modelType?: string, name?: string) { 
        this['model_id'] = modelId;
        this['model_type'] = modelType;
        this['name'] = name;
    }
    public withDescription(description: string): ComponentParam {
        this['description'] = description;
        return this;
    }
    public withModelId(modelId: string): ComponentParam {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withModelType(modelType: ComponentParamModelTypeEnum | string): ComponentParam {
        this['model_type'] = modelType;
        return this;
    }
    public set modelType(modelType: ComponentParamModelTypeEnum | string  | undefined) {
        this['model_type'] = modelType;
    }
    public get modelType(): ComponentParamModelTypeEnum | string | undefined {
        return this['model_type'];
    }
    public withName(name: string): ComponentParam {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentParamModelTypeEnum {
    APPLICATION = 'APPLICATION',
    SUB_APPLICATION = 'SUB_APPLICATION'
}
