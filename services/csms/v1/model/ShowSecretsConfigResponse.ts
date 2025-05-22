
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecretsConfigResponse extends SdkResponse {
    private 'checking_secret_strength'?: boolean;
    public constructor() { 
        super();
    }
    public withCheckingSecretStrength(checkingSecretStrength: boolean): ShowSecretsConfigResponse {
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