import { CreateImageServerReq } from './CreateImageServerReq';


export class CreateImageServerRequest {
    private 'Service-Transaction-Id'?: string;
    private 'X-Linked-Id'?: string;
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
    public withXLinkedId(xLinkedId: string): CreateImageServerRequest {
        this['X-Linked-Id'] = xLinkedId;
        return this;
    }
    public set xLinkedId(xLinkedId: string  | undefined) {
        this['X-Linked-Id'] = xLinkedId;
    }
    public get xLinkedId(): string | undefined {
        return this['X-Linked-Id'];
    }
    public withBody(body: CreateImageServerReq): CreateImageServerRequest {
        this['body'] = body;
        return this;
    }
}