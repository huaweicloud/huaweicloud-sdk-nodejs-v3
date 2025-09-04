import { CreateAppServerReq } from './CreateAppServerReq';


export class CreateAppServersRequest {
    private 'X-Linked-Id'?: string;
    private 'Service-Transaction-Id'?: string;
    public body?: CreateAppServerReq;
    public constructor() { 
    }
    public withXLinkedId(xLinkedId: string): CreateAppServersRequest {
        this['X-Linked-Id'] = xLinkedId;
        return this;
    }
    public set xLinkedId(xLinkedId: string  | undefined) {
        this['X-Linked-Id'] = xLinkedId;
    }
    public get xLinkedId(): string | undefined {
        return this['X-Linked-Id'];
    }
    public withServiceTransactionId(serviceTransactionId: string): CreateAppServersRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: CreateAppServerReq): CreateAppServersRequest {
        this['body'] = body;
        return this;
    }
}