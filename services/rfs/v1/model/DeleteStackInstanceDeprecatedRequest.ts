import { DeleteStackInstanceRequestBody } from './DeleteStackInstanceRequestBody';


export class DeleteStackInstanceDeprecatedRequest {
    private 'Client-Request-Id'?: string;
    private 'stack_set_name'?: string;
    public body?: DeleteStackInstanceRequestBody;
    public constructor(clientRequestId?: string, stackSetName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['stack_set_name'] = stackSetName;
    }
    public withClientRequestId(clientRequestId: string): DeleteStackInstanceDeprecatedRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withStackSetName(stackSetName: string): DeleteStackInstanceDeprecatedRequest {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withBody(body: DeleteStackInstanceRequestBody): DeleteStackInstanceDeprecatedRequest {
        this['body'] = body;
        return this;
    }
}