

export class PrivateHookVersionDescriptionPrimitiveTypeHolder {
    private 'hook_version_description'?: string;
    public constructor() { 
    }
    public withHookVersionDescription(hookVersionDescription: string): PrivateHookVersionDescriptionPrimitiveTypeHolder {
        this['hook_version_description'] = hookVersionDescription;
        return this;
    }
    public set hookVersionDescription(hookVersionDescription: string  | undefined) {
        this['hook_version_description'] = hookVersionDescription;
    }
    public get hookVersionDescription(): string | undefined {
        return this['hook_version_description'];
    }
}