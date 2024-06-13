import { RemediationResourceParameter } from './RemediationResourceParameter';
import { RemediationStaticParameter } from './RemediationStaticParameter';


export class RemediationConfigurationRequestBody {
    public automatic?: boolean;
    private 'target_type'?: RemediationConfigurationRequestBodyTargetTypeEnum | string;
    private 'target_id'?: string;
    private 'static_parameter'?: Array<RemediationStaticParameter>;
    private 'resource_parameter'?: RemediationResourceParameter;
    private 'maximum_attempts'?: number;
    private 'retry_attempt_seconds'?: number;
    private 'auth_type'?: RemediationConfigurationRequestBodyAuthTypeEnum | string;
    private 'auth_value'?: string;
    public constructor(targetType?: string, targetId?: string, resourceParameter?: RemediationResourceParameter) { 
        this['target_type'] = targetType;
        this['target_id'] = targetId;
        this['resource_parameter'] = resourceParameter;
    }
    public withAutomatic(automatic: boolean): RemediationConfigurationRequestBody {
        this['automatic'] = automatic;
        return this;
    }
    public withTargetType(targetType: RemediationConfigurationRequestBodyTargetTypeEnum | string): RemediationConfigurationRequestBody {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: RemediationConfigurationRequestBodyTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): RemediationConfigurationRequestBodyTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): RemediationConfigurationRequestBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withStaticParameter(staticParameter: Array<RemediationStaticParameter>): RemediationConfigurationRequestBody {
        this['static_parameter'] = staticParameter;
        return this;
    }
    public set staticParameter(staticParameter: Array<RemediationStaticParameter>  | undefined) {
        this['static_parameter'] = staticParameter;
    }
    public get staticParameter(): Array<RemediationStaticParameter> | undefined {
        return this['static_parameter'];
    }
    public withResourceParameter(resourceParameter: RemediationResourceParameter): RemediationConfigurationRequestBody {
        this['resource_parameter'] = resourceParameter;
        return this;
    }
    public set resourceParameter(resourceParameter: RemediationResourceParameter  | undefined) {
        this['resource_parameter'] = resourceParameter;
    }
    public get resourceParameter(): RemediationResourceParameter | undefined {
        return this['resource_parameter'];
    }
    public withMaximumAttempts(maximumAttempts: number): RemediationConfigurationRequestBody {
        this['maximum_attempts'] = maximumAttempts;
        return this;
    }
    public set maximumAttempts(maximumAttempts: number  | undefined) {
        this['maximum_attempts'] = maximumAttempts;
    }
    public get maximumAttempts(): number | undefined {
        return this['maximum_attempts'];
    }
    public withRetryAttemptSeconds(retryAttemptSeconds: number): RemediationConfigurationRequestBody {
        this['retry_attempt_seconds'] = retryAttemptSeconds;
        return this;
    }
    public set retryAttemptSeconds(retryAttemptSeconds: number  | undefined) {
        this['retry_attempt_seconds'] = retryAttemptSeconds;
    }
    public get retryAttemptSeconds(): number | undefined {
        return this['retry_attempt_seconds'];
    }
    public withAuthType(authType: RemediationConfigurationRequestBodyAuthTypeEnum | string): RemediationConfigurationRequestBody {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: RemediationConfigurationRequestBodyAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): RemediationConfigurationRequestBodyAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthValue(authValue: string): RemediationConfigurationRequestBody {
        this['auth_value'] = authValue;
        return this;
    }
    public set authValue(authValue: string  | undefined) {
        this['auth_value'] = authValue;
    }
    public get authValue(): string | undefined {
        return this['auth_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RemediationConfigurationRequestBodyTargetTypeEnum {
    FGS = 'fgs',
    RFS = 'rfs'
}
/**
    * @export
    * @enum {string}
    */
export enum RemediationConfigurationRequestBodyAuthTypeEnum {
    AGENCY = 'agency',
    TRUSTAGENCY = 'trustAgency'
}
