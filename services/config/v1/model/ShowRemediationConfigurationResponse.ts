import { RemediationResourceParameter } from './RemediationResourceParameter';
import { RemediationStaticParameter } from './RemediationStaticParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRemediationConfigurationResponse extends SdkResponse {
    public automatic?: boolean;
    private 'target_type'?: string;
    private 'target_id'?: string;
    private 'static_parameter'?: Array<RemediationStaticParameter>;
    private 'resource_parameter'?: RemediationResourceParameter;
    private 'maximum_attempts'?: number;
    private 'retry_attempt_seconds'?: number;
    private 'auth_type'?: string;
    private 'auth_value'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'created_by'?: string;
    public constructor() { 
        super();
    }
    public withAutomatic(automatic: boolean): ShowRemediationConfigurationResponse {
        this['automatic'] = automatic;
        return this;
    }
    public withTargetType(targetType: string): ShowRemediationConfigurationResponse {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): ShowRemediationConfigurationResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withStaticParameter(staticParameter: Array<RemediationStaticParameter>): ShowRemediationConfigurationResponse {
        this['static_parameter'] = staticParameter;
        return this;
    }
    public set staticParameter(staticParameter: Array<RemediationStaticParameter>  | undefined) {
        this['static_parameter'] = staticParameter;
    }
    public get staticParameter(): Array<RemediationStaticParameter> | undefined {
        return this['static_parameter'];
    }
    public withResourceParameter(resourceParameter: RemediationResourceParameter): ShowRemediationConfigurationResponse {
        this['resource_parameter'] = resourceParameter;
        return this;
    }
    public set resourceParameter(resourceParameter: RemediationResourceParameter  | undefined) {
        this['resource_parameter'] = resourceParameter;
    }
    public get resourceParameter(): RemediationResourceParameter | undefined {
        return this['resource_parameter'];
    }
    public withMaximumAttempts(maximumAttempts: number): ShowRemediationConfigurationResponse {
        this['maximum_attempts'] = maximumAttempts;
        return this;
    }
    public set maximumAttempts(maximumAttempts: number  | undefined) {
        this['maximum_attempts'] = maximumAttempts;
    }
    public get maximumAttempts(): number | undefined {
        return this['maximum_attempts'];
    }
    public withRetryAttemptSeconds(retryAttemptSeconds: number): ShowRemediationConfigurationResponse {
        this['retry_attempt_seconds'] = retryAttemptSeconds;
        return this;
    }
    public set retryAttemptSeconds(retryAttemptSeconds: number  | undefined) {
        this['retry_attempt_seconds'] = retryAttemptSeconds;
    }
    public get retryAttemptSeconds(): number | undefined {
        return this['retry_attempt_seconds'];
    }
    public withAuthType(authType: string): ShowRemediationConfigurationResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withAuthValue(authValue: string): ShowRemediationConfigurationResponse {
        this['auth_value'] = authValue;
        return this;
    }
    public set authValue(authValue: string  | undefined) {
        this['auth_value'] = authValue;
    }
    public get authValue(): string | undefined {
        return this['auth_value'];
    }
    public withCreatedAt(createdAt: string): ShowRemediationConfigurationResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowRemediationConfigurationResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCreatedBy(createdBy: string): ShowRemediationConfigurationResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
}