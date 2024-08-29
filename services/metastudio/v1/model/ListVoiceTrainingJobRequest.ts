

export class ListVoiceTrainingJobRequest {
    public offset?: number;
    public limit?: number;
    private 'create_until'?: string;
    private 'create_since'?: string;
    private 'X-App-UserId'?: string;
    public state?: string;
    private 'job_id'?: string;
    private 'voice_name'?: string;
    public tag?: string;
    private 'job_type'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListVoiceTrainingJobRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVoiceTrainingJobRequest {
        this['limit'] = limit;
        return this;
    }
    public withCreateUntil(createUntil: string): ListVoiceTrainingJobRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
    public withCreateSince(createSince: string): ListVoiceTrainingJobRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withXAppUserId(xAppUserId: string): ListVoiceTrainingJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withState(state: string): ListVoiceTrainingJobRequest {
        this['state'] = state;
        return this;
    }
    public withJobId(jobId: string): ListVoiceTrainingJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withVoiceName(voiceName: string): ListVoiceTrainingJobRequest {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withTag(tag: string): ListVoiceTrainingJobRequest {
        this['tag'] = tag;
        return this;
    }
    public withJobType(jobType: string): ListVoiceTrainingJobRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
}