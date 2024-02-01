

export class PrivateProviderVersionDescriptionPrimitiveTypeHolder {
    private 'version_description'?: string;
    public constructor() { 
    }
    public withVersionDescription(versionDescription: string): PrivateProviderVersionDescriptionPrimitiveTypeHolder {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
}