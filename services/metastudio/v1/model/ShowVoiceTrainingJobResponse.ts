import { CreateType } from './CreateType';
import { JobState } from './JobState';
import { JobTag } from './JobTag';
import { JobType } from './JobType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVoiceTrainingJobResponse extends SdkResponse {
    private 'job_type'?: JobType;
    private 'job_id'?: string;
    private 'app_user_id'?: string;
    private 'voice_name'?: string;
    public sex?: string;
    public language?: string;
    public state?: JobState;
    private 'reject_times'?: number;
    private 'asset_id'?: string;
    private 'job_failed_code'?: string;
    private 'job_failed_reason'?: string;
    private 'create_time'?: number;
    private 'lastupdate_time'?: number;
    private 'voice_authorization_url'?: string;
    private 'create_type'?: CreateType;
    public tag?: JobTag;
    public phone?: string;
    private 'dhtms_job_id'?: string;
    private 'batch_name'?: string;
    public constructor() { 
        super();
    }
    public withJobType(jobType: JobType): ShowVoiceTrainingJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): ShowVoiceTrainingJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAppUserId(appUserId: string): ShowVoiceTrainingJobResponse {
        this['app_user_id'] = appUserId;
        return this;
    }
    public set appUserId(appUserId: string  | undefined) {
        this['app_user_id'] = appUserId;
    }
    public get appUserId(): string | undefined {
        return this['app_user_id'];
    }
    public withVoiceName(voiceName: string): ShowVoiceTrainingJobResponse {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withSex(sex: string): ShowVoiceTrainingJobResponse {
        this['sex'] = sex;
        return this;
    }
    public withLanguage(language: string): ShowVoiceTrainingJobResponse {
        this['language'] = language;
        return this;
    }
    public withState(state: JobState): ShowVoiceTrainingJobResponse {
        this['state'] = state;
        return this;
    }
    public withRejectTimes(rejectTimes: number): ShowVoiceTrainingJobResponse {
        this['reject_times'] = rejectTimes;
        return this;
    }
    public set rejectTimes(rejectTimes: number  | undefined) {
        this['reject_times'] = rejectTimes;
    }
    public get rejectTimes(): number | undefined {
        return this['reject_times'];
    }
    public withAssetId(assetId: string): ShowVoiceTrainingJobResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withJobFailedCode(jobFailedCode: string): ShowVoiceTrainingJobResponse {
        this['job_failed_code'] = jobFailedCode;
        return this;
    }
    public set jobFailedCode(jobFailedCode: string  | undefined) {
        this['job_failed_code'] = jobFailedCode;
    }
    public get jobFailedCode(): string | undefined {
        return this['job_failed_code'];
    }
    public withJobFailedReason(jobFailedReason: string): ShowVoiceTrainingJobResponse {
        this['job_failed_reason'] = jobFailedReason;
        return this;
    }
    public set jobFailedReason(jobFailedReason: string  | undefined) {
        this['job_failed_reason'] = jobFailedReason;
    }
    public get jobFailedReason(): string | undefined {
        return this['job_failed_reason'];
    }
    public withCreateTime(createTime: number): ShowVoiceTrainingJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: number): ShowVoiceTrainingJobResponse {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: number  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): number | undefined {
        return this['lastupdate_time'];
    }
    public withVoiceAuthorizationUrl(voiceAuthorizationUrl: string): ShowVoiceTrainingJobResponse {
        this['voice_authorization_url'] = voiceAuthorizationUrl;
        return this;
    }
    public set voiceAuthorizationUrl(voiceAuthorizationUrl: string  | undefined) {
        this['voice_authorization_url'] = voiceAuthorizationUrl;
    }
    public get voiceAuthorizationUrl(): string | undefined {
        return this['voice_authorization_url'];
    }
    public withCreateType(createType: CreateType): ShowVoiceTrainingJobResponse {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: CreateType  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): CreateType | undefined {
        return this['create_type'];
    }
    public withTag(tag: JobTag): ShowVoiceTrainingJobResponse {
        this['tag'] = tag;
        return this;
    }
    public withPhone(phone: string): ShowVoiceTrainingJobResponse {
        this['phone'] = phone;
        return this;
    }
    public withDhtmsJobId(dhtmsJobId: string): ShowVoiceTrainingJobResponse {
        this['dhtms_job_id'] = dhtmsJobId;
        return this;
    }
    public set dhtmsJobId(dhtmsJobId: string  | undefined) {
        this['dhtms_job_id'] = dhtmsJobId;
    }
    public get dhtmsJobId(): string | undefined {
        return this['dhtms_job_id'];
    }
    public withBatchName(batchName: string): ShowVoiceTrainingJobResponse {
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