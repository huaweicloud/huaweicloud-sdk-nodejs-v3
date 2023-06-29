import { AddMaterialRequestBody } from './AddMaterialRequestBody';


export class AddMaterialRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: AddMaterialRequestBody;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): AddMaterialRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): AddMaterialRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: AddMaterialRequestBody): AddMaterialRequest {
        this['body'] = body;
        return this;
    }
}