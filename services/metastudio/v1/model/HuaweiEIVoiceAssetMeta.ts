

export class HuaweiEIVoiceAssetMeta {
    public property?: string;
    private 'is_cloned_voice'?: boolean;
    private 'training_job_id'?: string;
    public constructor(property?: string) { 
        this['property'] = property;
    }
    public withProperty(property: string): HuaweiEIVoiceAssetMeta {
        this['property'] = property;
        return this;
    }
    public withIsClonedVoice(isClonedVoice: boolean): HuaweiEIVoiceAssetMeta {
        this['is_cloned_voice'] = isClonedVoice;
        return this;
    }
    public set isClonedVoice(isClonedVoice: boolean  | undefined) {
        this['is_cloned_voice'] = isClonedVoice;
    }
    public get isClonedVoice(): boolean | undefined {
        return this['is_cloned_voice'];
    }
    public withTrainingJobId(trainingJobId: string): HuaweiEIVoiceAssetMeta {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
}