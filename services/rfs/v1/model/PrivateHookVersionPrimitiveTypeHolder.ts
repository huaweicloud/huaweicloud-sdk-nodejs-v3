

export class PrivateHookVersionPrimitiveTypeHolder {
    private 'hook_version'?: string;
    public constructor(hookVersion?: string) { 
        this['hook_version'] = hookVersion;
    }
    public withHookVersion(hookVersion: string): PrivateHookVersionPrimitiveTypeHolder {
        this['hook_version'] = hookVersion;
        return this;
    }
    public set hookVersion(hookVersion: string  | undefined) {
        this['hook_version'] = hookVersion;
    }
    public get hookVersion(): string | undefined {
        return this['hook_version'];
    }
}