

export class PrivateModuleVersionDescriptionPrimitiveTypeHolder {
    private 'version_description'?: string;
    public constructor() { 
    }
    public withVersionDescription(versionDescription: string): PrivateModuleVersionDescriptionPrimitiveTypeHolder {
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