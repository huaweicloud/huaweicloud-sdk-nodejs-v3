import { SetProfileImageRequestBody } from './SetProfileImageRequestBody';


export class SetProfileImageRequest {
    private 'X-Request-Id'?: string;
    public body?: SetProfileImageRequestBody;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SetProfileImageRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withBody(body: SetProfileImageRequestBody): SetProfileImageRequest {
        this['body'] = body;
        return this;
    }
}