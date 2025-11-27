

export class PrivateHookIdPrimitiveTypeHolder {
    private 'hook_id'?: string;
    public constructor() { 
    }
    public withHookId(hookId: string): PrivateHookIdPrimitiveTypeHolder {
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