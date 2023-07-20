

export class CreateSecretVersionRequestBody {
    private 'secret_binary'?: string;
    private 'secret_string'?: string;
    private 'version_stages'?: Array<string>;
    public constructor() { 
    }
    public withSecretBinary(secretBinary: string): CreateSecretVersionRequestBody {
        this['secret_binary'] = secretBinary;
        return this;
    }
    public set secretBinary(secretBinary: string  | undefined) {
        this['secret_binary'] = secretBinary;
    }
    public get secretBinary(): string | undefined {
        return this['secret_binary'];
    }
    public withSecretString(secretString: string): CreateSecretVersionRequestBody {
        this['secret_string'] = secretString;
        return this;
    }
    public set secretString(secretString: string  | undefined) {
        this['secret_string'] = secretString;
    }
    public get secretString(): string | undefined {
        return this['secret_string'];
    }
    public withVersionStages(versionStages: Array<string>): CreateSecretVersionRequestBody {
        this['version_stages'] = versionStages;
        return this;
    }
    public set versionStages(versionStages: Array<string>  | undefined) {
        this['version_stages'] = versionStages;
    }
    public get versionStages(): Array<string> | undefined {
        return this['version_stages'];
    }
}