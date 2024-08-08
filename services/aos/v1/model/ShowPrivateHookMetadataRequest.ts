

export class ShowPrivateHookMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'hook_name'?: string;
    private 'hook_id'?: string;
    public constructor(clientRequestId?: string, hookName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['hook_name'] = hookName;
    }
    public withClientRequestId(clientRequestId: string): ShowPrivateHookMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withHookName(hookName: string): ShowPrivateHookMetadataRequest {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookId(hookId: string): ShowPrivateHookMetadataRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
}