

export class ShowPrivateHookVersionMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'hook_name'?: string;
    private 'hook_version'?: string;
    private 'hook_id'?: string;
    public constructor(clientRequestId?: string, hookName?: string, hookVersion?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['hook_name'] = hookName;
        this['hook_version'] = hookVersion;
    }
    public withClientRequestId(clientRequestId: string): ShowPrivateHookVersionMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withHookName(hookName: string): ShowPrivateHookVersionMetadataRequest {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookVersion(hookVersion: string): ShowPrivateHookVersionMetadataRequest {
        this['hook_version'] = hookVersion;
        return this;
    }
    public set hookVersion(hookVersion: string  | undefined) {
        this['hook_version'] = hookVersion;
    }
    public get hookVersion(): string | undefined {
        return this['hook_version'];
    }
    public withHookId(hookId: string): ShowPrivateHookVersionMetadataRequest {
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