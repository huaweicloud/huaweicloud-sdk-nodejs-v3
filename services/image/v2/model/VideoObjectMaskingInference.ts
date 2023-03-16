

export class VideoObjectMaskingInference {
    private 'pass_through'?: string | undefined;
    private 'scene_type': VideoObjectMaskingInferenceSceneTypeEnum | undefined;
    private 'outcome_name'?: string | undefined;
    public constructor(sceneType?: any) { 
        this['scene_type'] = sceneType;
    }
    public withPassThrough(passThrough: string): VideoObjectMaskingInference {
        this['pass_through'] = passThrough;
        return this;
    }
    public set passThrough(passThrough: string | undefined) {
        this['pass_through'] = passThrough;
    }
    public get passThrough() {
        return this['pass_through'];
    }
    public withSceneType(sceneType: VideoObjectMaskingInferenceSceneTypeEnum): VideoObjectMaskingInference {
        this['scene_type'] = sceneType;
        return this;
    }
    public set sceneType(sceneType: VideoObjectMaskingInferenceSceneTypeEnum | undefined) {
        this['scene_type'] = sceneType;
    }
    public get sceneType() {
        return this['scene_type'];
    }
    public withOutcomeName(outcomeName: string): VideoObjectMaskingInference {
        this['outcome_name'] = outcomeName;
        return this;
    }
    public set outcomeName(outcomeName: string | undefined) {
        this['outcome_name'] = outcomeName;
    }
    public get outcomeName() {
        return this['outcome_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoObjectMaskingInferenceSceneTypeEnum {
    INSIDE = 'inside',
    OUTSIDE = 'outside'
}
