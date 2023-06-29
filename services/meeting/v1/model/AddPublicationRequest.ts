import { CreatePublicationRequestDTO } from './CreatePublicationRequestDTO';


export class AddPublicationRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: CreatePublicationRequestDTO;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): AddPublicationRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): AddPublicationRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: CreatePublicationRequestDTO): AddPublicationRequest {
        this['body'] = body;
        return this;
    }
}