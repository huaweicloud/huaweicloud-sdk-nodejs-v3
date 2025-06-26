import { CreateImageServerReq } from './CreateImageServerReq';


export class CreateImageServerRequest {
    private 'Service-Transaction-Id'?: string;
    public body?: CreateImageServerReq;
    public constructor() { 
    }
    public withServiceTransactionId(serviceTransactionId: string): CreateImageServerRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: CreateImageServerReq): CreateImageServerRequest {
        this['body'] = body;
        return this;
    }
}