

export class SecretVolumeResponse {
    private 'secret_name'?: string;
    private 'secret_key'?: string;
    private 'secret_value'?: string;
    private 'mount_path'?: string;
    public constructor(mountPath?: string) { 
        this['mount_path'] = mountPath;
    }
    public withSecretName(secretName: string): SecretVolumeResponse {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withSecretKey(secretKey: string): SecretVolumeResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withSecretValue(secretValue: string): SecretVolumeResponse {
        this['secret_value'] = secretValue;
        return this;
    }
    public set secretValue(secretValue: string  | undefined) {
        this['secret_value'] = secretValue;
    }
    public get secretValue(): string | undefined {
        return this['secret_value'];
    }
    public withMountPath(mountPath: string): SecretVolumeResponse {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
}