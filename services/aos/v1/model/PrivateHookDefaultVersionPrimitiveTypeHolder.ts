

export class PrivateHookDefaultVersionPrimitiveTypeHolder {
    private 'default_version'?: string;
    public constructor() { 
    }
    public withDefaultVersion(defaultVersion: string): PrivateHookDefaultVersionPrimitiveTypeHolder {
        this['default_version'] = defaultVersion;
        return this;
    }
    public set defaultVersion(defaultVersion: string  | undefined) {
        this['default_version'] = defaultVersion;
    }
    public get defaultVersion(): string | undefined {
        return this['default_version'];
    }
}