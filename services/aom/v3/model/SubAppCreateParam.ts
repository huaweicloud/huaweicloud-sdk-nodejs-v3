

export class SubAppCreateParam {
    public name?: string;
    private 'display_name'?: string;
    private 'model_id'?: string;
    private 'model_type'?: SubAppCreateParamModelTypeEnum | string;
    public description?: string;
    public constructor(name?: string, modelId?: string, modelType?: string) { 
        this['name'] = name;
        this['model_id'] = modelId;
        this['model_type'] = modelType;
    }
    public withName(name: string): SubAppCreateParam {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): SubAppCreateParam {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withModelId(modelId: string): SubAppCreateParam {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withModelType(modelType: SubAppCreateParamModelTypeEnum | string): SubAppCreateParam {
        this['model_type'] = modelType;
        return this;
    }
    public set modelType(modelType: SubAppCreateParamModelTypeEnum | string  | undefined) {
        this['model_type'] = modelType;
    }
    public get modelType(): SubAppCreateParamModelTypeEnum | string | undefined {
        return this['model_type'];
    }
    public withDescription(description: string): SubAppCreateParam {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubAppCreateParamModelTypeEnum {
    APPLICATION = 'APPLICATION',
    SUB_APPLICATION = 'SUB_APPLICATION'
}
