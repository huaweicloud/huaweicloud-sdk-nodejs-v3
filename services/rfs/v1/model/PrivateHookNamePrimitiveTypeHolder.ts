

export class PrivateHookNamePrimitiveTypeHolder {
    private 'hook_name'?: string;
    public constructor(hookName?: string) { 
        this['hook_name'] = hookName;
    }
    public withHookName(hookName: string): PrivateHookNamePrimitiveTypeHolder {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
}