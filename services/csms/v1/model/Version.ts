import { VersionMetadata } from './VersionMetadata';


export class Version {
    private 'version_metadata'?: VersionMetadata;
    private 'secret_binary'?: string;
    private 'secret_string'?: string;
    public constructor() { 
    }
    public withVersionMetadata(versionMetadata: VersionMetadata): Version {
        this['version_metadata'] = versionMetadata;
        return this;
    }
    public set versionMetadata(versionMetadata: VersionMetadata  | undefined) {
        this['version_metadata'] = versionMetadata;
    }
    public get versionMetadata(): VersionMetadata | undefined {
        return this['version_metadata'];
    }
    public withSecretBinary(secretBinary: string): Version {
        this['secret_binary'] = secretBinary;
        return this;
    }
    public set secretBinary(secretBinary: string  | undefined) {
        this['secret_binary'] = secretBinary;
    }
    public get secretBinary(): string | undefined {
        return this['secret_binary'];
    }
    public withSecretString(secretString: string): Version {
        this['secret_string'] = secretString;
        return this;
    }
    public set secretString(secretString: string  | undefined) {
        this['secret_string'] = secretString;
    }
    public get secretString(): string | undefined {
        return this['secret_string'];
    }
}