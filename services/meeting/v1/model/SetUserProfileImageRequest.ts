import { SetUserProfileImageRequestBody } from './SetUserProfileImageRequestBody';


export class SetUserProfileImageRequest {
    private 'X-Request-Id'?: string;
    private 'user_id'?: string;
    public body?: SetUserProfileImageRequestBody;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withXRequestId(xRequestId: string): SetUserProfileImageRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withUserId(userId: string): SetUserProfileImageRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: SetUserProfileImageRequestBody): SetUserProfileImageRequest {
        this['body'] = body;
        return this;
    }
}