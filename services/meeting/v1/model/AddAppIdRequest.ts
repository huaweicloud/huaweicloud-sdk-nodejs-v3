import { AddAppIdRequestBody } from './AddAppIdRequestBody';


export class AddAppIdRequest {
    private 'X-Request-Id'?: string;
    public body?: AddAppIdRequestBody;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): AddAppIdRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withBody(body: AddAppIdRequestBody): AddAppIdRequest {
        this['body'] = body;
        return this;
    }
}