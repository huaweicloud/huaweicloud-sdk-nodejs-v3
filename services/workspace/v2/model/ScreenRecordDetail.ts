

export class ScreenRecordDetail {
    public id?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'desktop_pool_id'?: string;
    public username?: string;
    public size?: number;
    public type?: string;
    public status?: string;
    private 'policy_id'?: string;
    private 'obs_bucket'?: string;
    private 'file_directory'?: string;
    private 'video_filename'?: string;
    private 'video_file_sha256'?: string;
    private 'event_filename'?: string;
    private 'event_file_sha256'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'update_time'?: string;
    public duration?: number;
    public constructor() { 
    }
    public withId(id: string): ScreenRecordDetail {
        this['id'] = id;
        return this;
    }
    public withDesktopId(desktopId: string): ScreenRecordDetail {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ScreenRecordDetail {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopPoolId(desktopPoolId: string): ScreenRecordDetail {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withUsername(username: string): ScreenRecordDetail {
        this['username'] = username;
        return this;
    }
    public withSize(size: number): ScreenRecordDetail {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ScreenRecordDetail {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ScreenRecordDetail {
        this['status'] = status;
        return this;
    }
    public withPolicyId(policyId: string): ScreenRecordDetail {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withObsBucket(obsBucket: string): ScreenRecordDetail {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withFileDirectory(fileDirectory: string): ScreenRecordDetail {
        this['file_directory'] = fileDirectory;
        return this;
    }
    public set fileDirectory(fileDirectory: string  | undefined) {
        this['file_directory'] = fileDirectory;
    }
    public get fileDirectory(): string | undefined {
        return this['file_directory'];
    }
    public withVideoFilename(videoFilename: string): ScreenRecordDetail {
        this['video_filename'] = videoFilename;
        return this;
    }
    public set videoFilename(videoFilename: string  | undefined) {
        this['video_filename'] = videoFilename;
    }
    public get videoFilename(): string | undefined {
        return this['video_filename'];
    }
    public withVideoFileSha256(videoFileSha256: string): ScreenRecordDetail {
        this['video_file_sha256'] = videoFileSha256;
        return this;
    }
    public set videoFileSha256(videoFileSha256: string  | undefined) {
        this['video_file_sha256'] = videoFileSha256;
    }
    public get videoFileSha256(): string | undefined {
        return this['video_file_sha256'];
    }
    public withEventFilename(eventFilename: string): ScreenRecordDetail {
        this['event_filename'] = eventFilename;
        return this;
    }
    public set eventFilename(eventFilename: string  | undefined) {
        this['event_filename'] = eventFilename;
    }
    public get eventFilename(): string | undefined {
        return this['event_filename'];
    }
    public withEventFileSha256(eventFileSha256: string): ScreenRecordDetail {
        this['event_file_sha256'] = eventFileSha256;
        return this;
    }
    public set eventFileSha256(eventFileSha256: string  | undefined) {
        this['event_file_sha256'] = eventFileSha256;
    }
    public get eventFileSha256(): string | undefined {
        return this['event_file_sha256'];
    }
    public withStartTime(startTime: string): ScreenRecordDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScreenRecordDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUpdateTime(updateTime: string): ScreenRecordDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDuration(duration: number): ScreenRecordDetail {
        this['duration'] = duration;
        return this;
    }
}