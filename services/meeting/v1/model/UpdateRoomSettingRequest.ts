import { OpenRoomSettingReq } from './OpenRoomSettingReq';


export class UpdateRoomSettingRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    private 'conference_id'?: string;
    public body?: OpenRoomSettingReq;
    public constructor(conferenceId?: string) { 
        this['conference_id'] = conferenceId;
    }
    public withXRequestId(xRequestId: string): UpdateRoomSettingRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateRoomSettingRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withConferenceId(conferenceId: string): UpdateRoomSettingRequest {
        this['conference_id'] = conferenceId;
        return this;
    }
    public set conferenceId(conferenceId: string  | undefined) {
        this['conference_id'] = conferenceId;
    }
    public get conferenceId(): string | undefined {
        return this['conference_id'];
    }
    public withBody(body: OpenRoomSettingReq): UpdateRoomSettingRequest {
        this['body'] = body;
        return this;
    }
}