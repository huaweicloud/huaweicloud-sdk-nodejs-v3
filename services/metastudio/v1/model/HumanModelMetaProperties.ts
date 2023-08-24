

export class HumanModelMetaProperties {
    private 'whole_model_base_file_id'?: string;
    private 'load_model_file_id'?: string;
    public constructor() { 
    }
    public withWholeModelBaseFileId(wholeModelBaseFileId: string): HumanModelMetaProperties {
        this['whole_model_base_file_id'] = wholeModelBaseFileId;
        return this;
    }
    public set wholeModelBaseFileId(wholeModelBaseFileId: string  | undefined) {
        this['whole_model_base_file_id'] = wholeModelBaseFileId;
    }
    public get wholeModelBaseFileId(): string | undefined {
        return this['whole_model_base_file_id'];
    }
    public withLoadModelFileId(loadModelFileId: string): HumanModelMetaProperties {
        this['load_model_file_id'] = loadModelFileId;
        return this;
    }
    public set loadModelFileId(loadModelFileId: string  | undefined) {
        this['load_model_file_id'] = loadModelFileId;
    }
    public get loadModelFileId(): string | undefined {
        return this['load_model_file_id'];
    }
}