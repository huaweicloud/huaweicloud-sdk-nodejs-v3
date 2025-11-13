
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAudioRecordConfigResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'obs_bucket_name'?: string;
    private 'obs_endpoint'?: string;
    private 'enable_audio_record'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): CreateAudioRecordConfigResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObsBucketName(obsBucketName: string): CreateAudioRecordConfigResponse {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEndpoint(obsEndpoint: string): CreateAudioRecordConfigResponse {
        this['obs_endpoint'] = obsEndpoint;
        return this;
    }
    public set obsEndpoint(obsEndpoint: string  | undefined) {
        this['obs_endpoint'] = obsEndpoint;
    }
    public get obsEndpoint(): string | undefined {
        return this['obs_endpoint'];
    }
    public withEnableAudioRecord(enableAudioRecord: boolean): CreateAudioRecordConfigResponse {
        this['enable_audio_record'] = enableAudioRecord;
        return this;
    }
    public set enableAudioRecord(enableAudioRecord: boolean  | undefined) {
        this['enable_audio_record'] = enableAudioRecord;
    }
    public get enableAudioRecord(): boolean | undefined {
        return this['enable_audio_record'];
    }
    public withCreateTime(createTime: string): CreateAudioRecordConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateAudioRecordConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): CreateAudioRecordConfigResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}