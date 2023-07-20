import { UpdateProgramRequestDTO } from './UpdateProgramRequestDTO';


export class UpdateProgramRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public id?: string;
    public body?: UpdateProgramRequestDTO;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withXRequestId(xRequestId: string): UpdateProgramRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateProgramRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withId(id: string): UpdateProgramRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateProgramRequestDTO): UpdateProgramRequest {
        this['body'] = body;
        return this;
    }
}