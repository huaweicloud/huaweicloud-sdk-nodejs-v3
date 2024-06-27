import { CallIdentityPrimitiveTypeHolder } from './CallIdentityPrimitiveTypeHolder';
import { DeploymentTargets } from './DeploymentTargets';
import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { OperationPreferences } from './OperationPreferences';
import { OperationPreferencesTypeHolder } from './OperationPreferencesTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { TemplateBodyPrimitiveTypeHolder } from './TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './TemplateURIPrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './VarsURIPrimitiveTypeHolder';


export class DeployStackSetRequestBody {
    private 'stack_set_id'?: string;
    private 'deployment_targets'?: DeploymentTargets;
    private 'template_body'?: string;
    private 'template_uri'?: string;
    private 'vars_uri'?: string;
    private 'vars_body'?: string;
    private 'operation_preferences'?: OperationPreferences;
    private 'call_identity'?: DeployStackSetRequestBodyCallIdentityEnum | string;
    public constructor(deploymentTargets?: DeploymentTargets) { 
        this['deployment_targets'] = deploymentTargets;
    }
    public withStackSetId(stackSetId: string): DeployStackSetRequestBody {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargets): DeployStackSetRequestBody {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargets | undefined {
        return this['deployment_targets'];
    }
    public withTemplateBody(templateBody: string): DeployStackSetRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): DeployStackSetRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
    public withVarsUri(varsUri: string): DeployStackSetRequestBody {
        this['vars_uri'] = varsUri;
        return this;
    }
    public set varsUri(varsUri: string  | undefined) {
        this['vars_uri'] = varsUri;
    }
    public get varsUri(): string | undefined {
        return this['vars_uri'];
    }
    public withVarsBody(varsBody: string): DeployStackSetRequestBody {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withOperationPreferences(operationPreferences: OperationPreferences): DeployStackSetRequestBody {
        this['operation_preferences'] = operationPreferences;
        return this;
    }
    public set operationPreferences(operationPreferences: OperationPreferences  | undefined) {
        this['operation_preferences'] = operationPreferences;
    }
    public get operationPreferences(): OperationPreferences | undefined {
        return this['operation_preferences'];
    }
    public withCallIdentity(callIdentity: DeployStackSetRequestBodyCallIdentityEnum | string): DeployStackSetRequestBody {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: DeployStackSetRequestBodyCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): DeployStackSetRequestBodyCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeployStackSetRequestBodyCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
