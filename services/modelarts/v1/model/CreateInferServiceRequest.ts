import { ServiceCreateRequest } from './ServiceCreateRequest';


export class CreateInferServiceRequest {
    private 'X-Auth-Token-Provider'?: string;
    public body?: ServiceCreateRequest;
    public constructor() { 
    }
    public withXAuthTokenProvider(xAuthTokenProvider: string): CreateInferServiceRequest {
        this['X-Auth-Token-Provider'] = xAuthTokenProvider;
        return this;
    }
    public set xAuthTokenProvider(xAuthTokenProvider: string  | undefined) {
        this['X-Auth-Token-Provider'] = xAuthTokenProvider;
    }
    public get xAuthTokenProvider(): string | undefined {
        return this['X-Auth-Token-Provider'];
    }
    public withBody(body: ServiceCreateRequest): CreateInferServiceRequest {
        this['body'] = body;
        return this;
    }
}