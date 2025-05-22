import { ReportLiveEventReq } from './ReportLiveEventReq';


export class LiveEventReportRequest {
    private 'room_id'?: string;
    private 'job_id'?: string;
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'auth_key'?: string;
    private 'expires_time'?: number;
    private 'x-mss-auth-key'?: string;
    private 'x-mss-expires-time'?: number;
    private 'refresh_url'?: boolean;
    public body?: ReportLiveEventReq;
    public constructor(roomId?: string, jobId?: string) { 
        this['room_id'] = roomId;
        this['job_id'] = jobId;
    }
    public withRoomId(roomId: string): LiveEventReportRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withJobId(jobId: string): LiveEventReportRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAuthorization(authorization: string): LiveEventReportRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): LiveEventReportRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): LiveEventReportRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): LiveEventReportRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withAuthKey(authKey: string): LiveEventReportRequest {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string  | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey(): string | undefined {
        return this['auth_key'];
    }
    public withExpiresTime(expiresTime: number): LiveEventReportRequest {
        this['expires_time'] = expiresTime;
        return this;
    }
    public set expiresTime(expiresTime: number  | undefined) {
        this['expires_time'] = expiresTime;
    }
    public get expiresTime(): number | undefined {
        return this['expires_time'];
    }
    public withXMssAuthKey(xMssAuthKey: string): LiveEventReportRequest {
        this['x-mss-auth-key'] = xMssAuthKey;
        return this;
    }
    public set xMssAuthKey(xMssAuthKey: string  | undefined) {
        this['x-mss-auth-key'] = xMssAuthKey;
    }
    public get xMssAuthKey(): string | undefined {
        return this['x-mss-auth-key'];
    }
    public withXMssExpiresTime(xMssExpiresTime: number): LiveEventReportRequest {
        this['x-mss-expires-time'] = xMssExpiresTime;
        return this;
    }
    public set xMssExpiresTime(xMssExpiresTime: number  | undefined) {
        this['x-mss-expires-time'] = xMssExpiresTime;
    }
    public get xMssExpiresTime(): number | undefined {
        return this['x-mss-expires-time'];
    }
    public withRefreshUrl(refreshUrl: boolean): LiveEventReportRequest {
        this['refresh_url'] = refreshUrl;
        return this;
    }
    public set refreshUrl(refreshUrl: boolean  | undefined) {
        this['refresh_url'] = refreshUrl;
    }
    public get refreshUrl(): boolean | undefined {
        return this['refresh_url'];
    }
    public withBody(body: ReportLiveEventReq): LiveEventReportRequest {
        this['body'] = body;
        return this;
    }
}