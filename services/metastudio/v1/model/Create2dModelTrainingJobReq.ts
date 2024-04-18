

export class Create2dModelTrainingJobReq {
    public name?: string;
    public contact?: string;
    private 'command_message'?: Create2dModelTrainingJobReqCommandMessageEnum | string;
    private 'video_multipart_count'?: number;
    private 'is_background_replacement'?: boolean;
    private 'batch_name'?: string;
    public tags?: Array<string>;
    private 'model_version'?: Create2dModelTrainingJobReqModelVersionEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): Create2dModelTrainingJobReq {
        this['name'] = name;
        return this;
    }
    public withContact(contact: string): Create2dModelTrainingJobReq {
        this['contact'] = contact;
        return this;
    }
    public withCommandMessage(commandMessage: Create2dModelTrainingJobReqCommandMessageEnum | string): Create2dModelTrainingJobReq {
        this['command_message'] = commandMessage;
        return this;
    }
    public set commandMessage(commandMessage: Create2dModelTrainingJobReqCommandMessageEnum | string  | undefined) {
        this['command_message'] = commandMessage;
    }
    public get commandMessage(): Create2dModelTrainingJobReqCommandMessageEnum | string | undefined {
        return this['command_message'];
    }
    public withVideoMultipartCount(videoMultipartCount: number): Create2dModelTrainingJobReq {
        this['video_multipart_count'] = videoMultipartCount;
        return this;
    }
    public set videoMultipartCount(videoMultipartCount: number  | undefined) {
        this['video_multipart_count'] = videoMultipartCount;
    }
    public get videoMultipartCount(): number | undefined {
        return this['video_multipart_count'];
    }
    public withIsBackgroundReplacement(isBackgroundReplacement: boolean): Create2dModelTrainingJobReq {
        this['is_background_replacement'] = isBackgroundReplacement;
        return this;
    }
    public set isBackgroundReplacement(isBackgroundReplacement: boolean  | undefined) {
        this['is_background_replacement'] = isBackgroundReplacement;
    }
    public get isBackgroundReplacement(): boolean | undefined {
        return this['is_background_replacement'];
    }
    public withBatchName(batchName: string): Create2dModelTrainingJobReq {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTags(tags: Array<string>): Create2dModelTrainingJobReq {
        this['tags'] = tags;
        return this;
    }
    public withModelVersion(modelVersion: Create2dModelTrainingJobReqModelVersionEnum | string): Create2dModelTrainingJobReq {
        this['model_version'] = modelVersion;
        return this;
    }
    public set modelVersion(modelVersion: Create2dModelTrainingJobReqModelVersionEnum | string  | undefined) {
        this['model_version'] = modelVersion;
    }
    public get modelVersion(): Create2dModelTrainingJobReqModelVersionEnum | string | undefined {
        return this['model_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Create2dModelTrainingJobReqCommandMessageEnum {
    UPDATE_VIDEO = 'UPDATE_VIDEO',
    UPLOAD_VIDEO = 'UPLOAD_VIDEO'
}
/**
    * @export
    * @enum {string}
    */
export enum Create2dModelTrainingJobReqModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3',
    V3_2 = 'V3.2'
}
