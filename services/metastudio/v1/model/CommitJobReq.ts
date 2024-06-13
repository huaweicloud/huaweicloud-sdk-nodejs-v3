import { JobTag } from './JobTag';


export class CommitJobReq {
    public tag?: JobTag;
    public description?: string;
    public sex?: CommitJobReqSexEnum | string;
    private 'voice_name'?: string;
    public language?: string;
    public phone?: string;
    private 'app_user_id'?: string;
    public constructor() { 
    }
    public withTag(tag: JobTag): CommitJobReq {
        this['tag'] = tag;
        return this;
    }
    public withDescription(description: string): CommitJobReq {
        this['description'] = description;
        return this;
    }
    public withSex(sex: CommitJobReqSexEnum | string): CommitJobReq {
        this['sex'] = sex;
        return this;
    }
    public withVoiceName(voiceName: string): CommitJobReq {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withLanguage(language: string): CommitJobReq {
        this['language'] = language;
        return this;
    }
    public withPhone(phone: string): CommitJobReq {
        this['phone'] = phone;
        return this;
    }
    public withAppUserId(appUserId: string): CommitJobReq {
        this['app_user_id'] = appUserId;
        return this;
    }
    public set appUserId(appUserId: string  | undefined) {
        this['app_user_id'] = appUserId;
    }
    public get appUserId(): string | undefined {
        return this['app_user_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommitJobReqSexEnum {
    FEMALE = 'FEMALE',
    MALE = 'MALE'
}
