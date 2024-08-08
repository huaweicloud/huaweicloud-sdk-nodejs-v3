

export class PrivateHookDescriptionPrimitiveTypeHolder {
    private 'hook_description'?: string;
    public constructor() { 
    }
    public withHookDescription(hookDescription: string): PrivateHookDescriptionPrimitiveTypeHolder {
        this['hook_description'] = hookDescription;
        return this;
    }
    public set hookDescription(hookDescription: string  | undefined) {
        this['hook_description'] = hookDescription;
    }
    public get hookDescription(): string | undefined {
        return this['hook_description'];
    }
}