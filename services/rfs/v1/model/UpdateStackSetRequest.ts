import { UpdateStackSetRequestBody } from './UpdateStackSetRequestBody';


export class UpdateStackSetRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    public body?: UpdateStackSetRequestBody;
    public constructor(clientRequestId?: string, stackSetName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
    }
    public withClientRequestId(clientRequestId: string): UpdateStackSetRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): UpdateStackSetRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withBody(body: UpdateStackSetRequestBody): UpdateStackSetRequest {
        this['body'] = body;
        return this;
    }
}