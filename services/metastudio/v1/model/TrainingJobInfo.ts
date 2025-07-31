import { AssessResult } from './AssessResult';
import { CreateType } from './CreateType';
import { JobState } from './JobState';
import { JobTag } from './JobTag';
import { JobType } from './JobType';
import { VoiceTrainingAllocatedResource } from './VoiceTrainingAllocatedResource';


export class TrainingJobInfo {
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
    private 'training_input_source_url'?: string;
    private 'create_type'?: CreateType;
    public tag?: JobTag;
    public phone?: string;
    private 'dhtms_job_id'?: string;
    private 'batch_name'?: string;
    private 'allocated_resource'?: VoiceTrainingAllocatedResource;
    private 'output_language'?: string;
    private 'is_remake'?: boolean;
    private 'assess_result'?: AssessResult;
    private 'is_ondemand_resource'?: boolean;
    public constructor() { 
    }
    public withJobType(jobType: JobType): TrainingJobInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): TrainingJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAppUserId(appUserId: string): TrainingJobInfo {
        this['app_user_id'] = appUserId;
        return this;
    }
    public set appUserId(appUserId: string  | undefined) {
        this['app_user_id'] = appUserId;
    }
    public get appUserId(): string | undefined {
        return this['app_user_id'];
    }
    public withVoiceName(voiceName: string): TrainingJobInfo {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withSex(sex: string): TrainingJobInfo {
        this['sex'] = sex;
        return this;
    }
    public withLanguage(language: string): TrainingJobInfo {
        this['language'] = language;
        return this;
    }
    public withState(state: JobState): TrainingJobInfo {
        this['state'] = state;
        return this;
    }
    public withRejectTimes(rejectTimes: number): TrainingJobInfo {
        this['reject_times'] = rejectTimes;
        return this;
    }
    public set rejectTimes(rejectTimes: number  | undefined) {
        this['reject_times'] = rejectTimes;
    }
    public get rejectTimes(): number | undefined {
        return this['reject_times'];
    }
    public withAssetId(assetId: string): TrainingJobInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withJobFailedCode(jobFailedCode: string): TrainingJobInfo {
        this['job_failed_code'] = jobFailedCode;
        return this;
    }
    public set jobFailedCode(jobFailedCode: string  | undefined) {
        this['job_failed_code'] = jobFailedCode;
    }
    public get jobFailedCode(): string | undefined {
        return this['job_failed_code'];
    }
    public withJobFailedReason(jobFailedReason: string): TrainingJobInfo {
        this['job_failed_reason'] = jobFailedReason;
        return this;
    }
    public set jobFailedReason(jobFailedReason: string  | undefined) {
        this['job_failed_reason'] = jobFailedReason;
    }
    public get jobFailedReason(): string | undefined {
        return this['job_failed_reason'];
    }
    public withCreateTime(createTime: number): TrainingJobInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: number): TrainingJobInfo {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: number  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): number | undefined {
        return this['lastupdate_time'];
    }
    public withVoiceAuthorizationUrl(voiceAuthorizationUrl: string): TrainingJobInfo {
        this['voice_authorization_url'] = voiceAuthorizationUrl;
        return this;
    }
    public set voiceAuthorizationUrl(voiceAuthorizationUrl: string  | undefined) {
        this['voice_authorization_url'] = voiceAuthorizationUrl;
    }
    public get voiceAuthorizationUrl(): string | undefined {
        return this['voice_authorization_url'];
    }
    public withTrainingInputSourceUrl(trainingInputSourceUrl: string): TrainingJobInfo {
        this['training_input_source_url'] = trainingInputSourceUrl;
        return this;
    }
    public set trainingInputSourceUrl(trainingInputSourceUrl: string  | undefined) {
        this['training_input_source_url'] = trainingInputSourceUrl;
    }
    public get trainingInputSourceUrl(): string | undefined {
        return this['training_input_source_url'];
    }
    public withCreateType(createType: CreateType): TrainingJobInfo {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: CreateType  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): CreateType | undefined {
        return this['create_type'];
    }
    public withTag(tag: JobTag): TrainingJobInfo {
        this['tag'] = tag;
        return this;
    }
    public withPhone(phone: string): TrainingJobInfo {
        this['phone'] = phone;
        return this;
    }
    public withDhtmsJobId(dhtmsJobId: string): TrainingJobInfo {
        this['dhtms_job_id'] = dhtmsJobId;
        return this;
    }
    public set dhtmsJobId(dhtmsJobId: string  | undefined) {
        this['dhtms_job_id'] = dhtmsJobId;
    }
    public get dhtmsJobId(): string | undefined {
        return this['dhtms_job_id'];
    }
    public withBatchName(batchName: string): TrainingJobInfo {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withAllocatedResource(allocatedResource: VoiceTrainingAllocatedResource): TrainingJobInfo {
        this['allocated_resource'] = allocatedResource;
        return this;
    }
    public set allocatedResource(allocatedResource: VoiceTrainingAllocatedResource  | undefined) {
        this['allocated_resource'] = allocatedResource;
    }
    public get allocatedResource(): VoiceTrainingAllocatedResource | undefined {
        return this['allocated_resource'];
    }
    public withOutputLanguage(outputLanguage: string): TrainingJobInfo {
        this['output_language'] = outputLanguage;
        return this;
    }
    public set outputLanguage(outputLanguage: string  | undefined) {
        this['output_language'] = outputLanguage;
    }
    public get outputLanguage(): string | undefined {
        return this['output_language'];
    }
    public withIsRemake(isRemake: boolean): TrainingJobInfo {
        this['is_remake'] = isRemake;
        return this;
    }
    public set isRemake(isRemake: boolean  | undefined) {
        this['is_remake'] = isRemake;
    }
    public get isRemake(): boolean | undefined {
        return this['is_remake'];
    }
    public withAssessResult(assessResult: AssessResult): TrainingJobInfo {
        this['assess_result'] = assessResult;
        return this;
    }
    public set assessResult(assessResult: AssessResult  | undefined) {
        this['assess_result'] = assessResult;
    }
    public get assessResult(): AssessResult | undefined {
        return this['assess_result'];
    }
    public withIsOndemandResource(isOndemandResource: boolean): TrainingJobInfo {
        this['is_ondemand_resource'] = isOndemandResource;
        return this;
    }
    public set isOndemandResource(isOndemandResource: boolean  | undefined) {
        this['is_ondemand_resource'] = isOndemandResource;
    }
    public get isOndemandResource(): boolean | undefined {
        return this['is_ondemand_resource'];
    }
}