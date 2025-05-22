

export class UpdateSecretsConfigRequestBody {
    private 'checking_secret_strength'?: boolean;
    public constructor() { 
    }
    public withCheckingSecretStrength(checkingSecretStrength: boolean): UpdateSecretsConfigRequestBody {
        this['checking_secret_strength'] = checkingSecretStrength;
        return this;
    }
    public set checkingSecretStrength(checkingSecretStrength: boolean  | undefined) {
        this['checking_secret_strength'] = checkingSecretStrength;
    }
    public get checkingSecretStrength(): boolean | undefined {
        return this['checking_secret_strength'];
    }
}