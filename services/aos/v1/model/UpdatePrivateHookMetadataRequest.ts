import { UpdatePrivateHookMetadataRequestBody } from './UpdatePrivateHookMetadataRequestBody';


export class UpdatePrivateHookMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'hook_name'?: string;
    public body?: UpdatePrivateHookMetadataRequestBody;
    public constructor(clientRequestId?: string, hookName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['hook_name'] = hookName;
    }
    public withClientRequestId(clientRequestId: string): UpdatePrivateHookMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withHookName(hookName: string): UpdatePrivateHookMetadataRequest {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withBody(body: UpdatePrivateHookMetadataRequestBody): UpdatePrivateHookMetadataRequest {
        this['body'] = body;
        return this;
    }
}