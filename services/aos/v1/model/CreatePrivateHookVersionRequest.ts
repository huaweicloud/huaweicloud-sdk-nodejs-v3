import { CreatePrivateHookVersionRequestBody } from './CreatePrivateHookVersionRequestBody';


export class CreatePrivateHookVersionRequest {
    private 'Client-Request-Id'?: string;
    private 'hook_name'?: string;
    public body?: CreatePrivateHookVersionRequestBody;
    public constructor(clientRequestId?: string, hookName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['hook_name'] = hookName;
    }
    public withClientRequestId(clientRequestId: string): CreatePrivateHookVersionRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withHookName(hookName: string): CreatePrivateHookVersionRequest {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withBody(body: CreatePrivateHookVersionRequestBody): CreatePrivateHookVersionRequest {
        this['body'] = body;
        return this;
    }
}