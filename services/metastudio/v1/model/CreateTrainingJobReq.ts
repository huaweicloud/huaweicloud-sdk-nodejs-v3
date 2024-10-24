import { CreateType } from './CreateType';
import { JobTag } from './JobTag';


export class CreateTrainingJobReq {
    public tag?: JobTag;
    public description?: string;
    public sex?: CreateTrainingJobReqSexEnum | string;
    private 'voice_name'?: string;
    public language?: string;
    private 'create_type'?: CreateType;
    public phone?: string;
    private 'dhtms_job_id'?: string;
    private 'batch_name'?: string;
    public constructor(voiceName?: string) { 
        this['voice_name'] = voiceName;
    }
    public withTag(tag: JobTag): CreateTrainingJobReq {
        this['tag'] = tag;
        return this;
    }
    public withDescription(description: string): CreateTrainingJobReq {
        this['description'] = description;
        return this;
    }
    public withSex(sex: CreateTrainingJobReqSexEnum | string): CreateTrainingJobReq {
        this['sex'] = sex;
        return this;
    }
    public withVoiceName(voiceName: string): CreateTrainingJobReq {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withLanguage(language: string): CreateTrainingJobReq {
        this['language'] = language;
        return this;
    }
    public withCreateType(createType: CreateType): CreateTrainingJobReq {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: CreateType  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): CreateType | undefined {
        return this['create_type'];
    }
    public withPhone(phone: string): CreateTrainingJobReq {
        this['phone'] = phone;
        return this;
    }
    public withDhtmsJobId(dhtmsJobId: string): CreateTrainingJobReq {
        this['dhtms_job_id'] = dhtmsJobId;
        return this;
    }
    public set dhtmsJobId(dhtmsJobId: string  | undefined) {
        this['dhtms_job_id'] = dhtmsJobId;
    }
    public get dhtmsJobId(): string | undefined {
        return this['dhtms_job_id'];
    }
    public withBatchName(batchName: string): CreateTrainingJobReq {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTrainingJobReqSexEnum {
    FEMALE = 'FEMALE',
    MALE = 'MALE'
}
