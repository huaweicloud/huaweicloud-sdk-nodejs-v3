

export class UpdateTdeStatusRequestBody {
    private 'rotate_day'?: number;
    private 'secret_id'?: string;
    private 'secret_name'?: string;
    private 'secret_version'?: string;
    public constructor() { 
    }
    public withRotateDay(rotateDay: number): UpdateTdeStatusRequestBody {
        this['rotate_day'] = rotateDay;
        return this;
    }
    public set rotateDay(rotateDay: number  | undefined) {
        this['rotate_day'] = rotateDay;
    }
    public get rotateDay(): number | undefined {
        return this['rotate_day'];
    }
    public withSecretId(secretId: string): UpdateTdeStatusRequestBody {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withSecretName(secretName: string): UpdateTdeStatusRequestBody {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withSecretVersion(secretVersion: string): UpdateTdeStatusRequestBody {
        this['secret_version'] = secretVersion;
        return this;
    }
    public set secretVersion(secretVersion: string  | undefined) {
        this['secret_version'] = secretVersion;
    }
    public get secretVersion(): string | undefined {
        return this['secret_version'];
    }
}