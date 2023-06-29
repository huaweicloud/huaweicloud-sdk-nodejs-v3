import { ModCorpDTO } from './ModCorpDTO';


export class UpdateCorpRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public id: string;
    public body?: ModCorpDTO;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withXRequestId(xRequestId: string): UpdateCorpRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateCorpRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withId(id: string): UpdateCorpRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ModCorpDTO): UpdateCorpRequest {
        this['body'] = body;
        return this;
    }
}