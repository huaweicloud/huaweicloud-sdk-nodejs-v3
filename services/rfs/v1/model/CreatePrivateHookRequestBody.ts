import { ConfigurationPrimitiveTypeHolder } from './ConfigurationPrimitiveTypeHolder';
import { ConfigurationPrimitiveTypeHolderConfiguration } from './ConfigurationPrimitiveTypeHolderConfiguration';
import { PrivateHookDescriptionPrimitiveTypeHolder } from './PrivateHookDescriptionPrimitiveTypeHolder';
import { PrivateHookNamePrimitiveTypeHolder } from './PrivateHookNamePrimitiveTypeHolder';
import { PrivateHookVersionDescriptionPrimitiveTypeHolder } from './PrivateHookVersionDescriptionPrimitiveTypeHolder';
import { PrivateHookVersionPrimitiveTypeHolder } from './PrivateHookVersionPrimitiveTypeHolder';
import { PrivatePolicyBodyPrimitiveTypeHolder } from './PrivatePolicyBodyPrimitiveTypeHolder';
import { PrivatePolicyURIPrimitiveTypeHolder } from './PrivatePolicyURIPrimitiveTypeHolder';


export class CreatePrivateHookRequestBody {
    private 'hook_name'?: string;
    private 'hook_version'?: string;
    private 'hook_description'?: string;
    private 'hook_version_description'?: string;
    public configuration?: ConfigurationPrimitiveTypeHolderConfiguration;
    private 'policy_uri'?: string;
    private 'policy_body'?: string;
    public constructor(hookName?: string, hookVersion?: string) { 
        this['hook_name'] = hookName;
        this['hook_version'] = hookVersion;
    }
    public withHookName(hookName: string): CreatePrivateHookRequestBody {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookVersion(hookVersion: string): CreatePrivateHookRequestBody {
        this['hook_version'] = hookVersion;
        return this;
    }
    public set hookVersion(hookVersion: string  | undefined) {
        this['hook_version'] = hookVersion;
    }
    public get hookVersion(): string | undefined {
        return this['hook_version'];
    }
    public withHookDescription(hookDescription: string): CreatePrivateHookRequestBody {
        this['hook_description'] = hookDescription;
        return this;
    }
    public set hookDescription(hookDescription: string  | undefined) {
        this['hook_description'] = hookDescription;
    }
    public get hookDescription(): string | undefined {
        return this['hook_description'];
    }
    public withHookVersionDescription(hookVersionDescription: string): CreatePrivateHookRequestBody {
        this['hook_version_description'] = hookVersionDescription;
        return this;
    }
    public set hookVersionDescription(hookVersionDescription: string  | undefined) {
        this['hook_version_description'] = hookVersionDescription;
    }
    public get hookVersionDescription(): string | undefined {
        return this['hook_version_description'];
    }
    public withConfiguration(configuration: ConfigurationPrimitiveTypeHolderConfiguration): CreatePrivateHookRequestBody {
        this['configuration'] = configuration;
        return this;
    }
    public withPolicyUri(policyUri: string): CreatePrivateHookRequestBody {
        this['policy_uri'] = policyUri;
        return this;
    }
    public set policyUri(policyUri: string  | undefined) {
        this['policy_uri'] = policyUri;
    }
    public get policyUri(): string | undefined {
        return this['policy_uri'];
    }
    public withPolicyBody(policyBody: string): CreatePrivateHookRequestBody {
        this['policy_body'] = policyBody;
        return this;
    }
    public set policyBody(policyBody: string  | undefined) {
        this['policy_body'] = policyBody;
    }
    public get policyBody(): string | undefined {
        return this['policy_body'];
    }
}