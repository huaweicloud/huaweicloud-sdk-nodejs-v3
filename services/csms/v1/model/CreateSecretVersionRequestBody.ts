

export class CreateSecretVersionRequestBody {
    private 'secret_binary'?: string | undefined;
    private 'secret_string'?: string | undefined;
    private 'version_stages'?: Array<string> | undefined;
    public constructor() { 
    }
    public withSecretBinary(secretBinary: string): CreateSecretVersionRequestBody {
        this['secret_binary'] = secretBinary;
        return this;
    }
    public set secretBinary(secretBinary: string | undefined) {
        this['secret_binary'] = secretBinary;
    }
    public get secretBinary() {
        return this['secret_binary'];
    }
    public withSecretString(secretString: string): CreateSecretVersionRequestBody {
        this['secret_string'] = secretString;
        return this;
    }
    public set secretString(secretString: string | undefined) {
        this['secret_string'] = secretString;
    }
    public get secretString() {
        return this['secret_string'];
    }
    public withVersionStages(versionStages: Array<string>): CreateSecretVersionRequestBody {
        this['version_stages'] = versionStages;
        return this;
    }
    public set versionStages(versionStages: Array<string> | undefined) {
        this['version_stages'] = versionStages;
    }
    public get versionStages() {
        return this['version_stages'];
    }
}