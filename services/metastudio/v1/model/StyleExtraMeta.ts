

export class StyleExtraMeta {
    private 'picture_modeling_enable'?: boolean;
    private 'edit_enable'?: boolean;
    private 'edit_engine'?: string;
    private 'model_id'?: string;
    public constructor() { 
    }
    public withPictureModelingEnable(pictureModelingEnable: boolean): StyleExtraMeta {
        this['picture_modeling_enable'] = pictureModelingEnable;
        return this;
    }
    public set pictureModelingEnable(pictureModelingEnable: boolean  | undefined) {
        this['picture_modeling_enable'] = pictureModelingEnable;
    }
    public get pictureModelingEnable(): boolean | undefined {
        return this['picture_modeling_enable'];
    }
    public withEditEnable(editEnable: boolean): StyleExtraMeta {
        this['edit_enable'] = editEnable;
        return this;
    }
    public set editEnable(editEnable: boolean  | undefined) {
        this['edit_enable'] = editEnable;
    }
    public get editEnable(): boolean | undefined {
        return this['edit_enable'];
    }
    public withEditEngine(editEngine: string): StyleExtraMeta {
        this['edit_engine'] = editEngine;
        return this;
    }
    public set editEngine(editEngine: string  | undefined) {
        this['edit_engine'] = editEngine;
    }
    public get editEngine(): string | undefined {
        return this['edit_engine'];
    }
    public withModelId(modelId: string): StyleExtraMeta {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}