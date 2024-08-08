import { PrivateHookIdPrimitiveTypeHolder } from './PrivateHookIdPrimitiveTypeHolder';
import { PrivateHookVersionDescriptionPrimitiveTypeHolder } from './PrivateHookVersionDescriptionPrimitiveTypeHolder';
import { PrivateHookVersionPrimitiveTypeHolder } from './PrivateHookVersionPrimitiveTypeHolder';
import { PrivatePolicyBodyPrimitiveTypeHolder } from './PrivatePolicyBodyPrimitiveTypeHolder';
import { PrivatePolicyURIPrimitiveTypeHolder } from './PrivatePolicyURIPrimitiveTypeHolder';


export class CreatePrivateHookVersionRequestBody {
    private 'hook_id'?: string;
    private 'hook_version'?: string;
    private 'hook_version_description'?: string;
    private 'policy_uri'?: string;
    private 'policy_body'?: string;
    public constructor(hookVersion?: string) { 
        this['hook_version'] = hookVersion;
    }
    public withHookId(hookId: string): CreatePrivateHookVersionRequestBody {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withHookVersion(hookVersion: string): CreatePrivateHookVersionRequestBody {
        this['hook_version'] = hookVersion;
        return this;
    }
    public set hookVersion(hookVersion: string  | undefined) {
        this['hook_version'] = hookVersion;
    }
    public get hookVersion(): string | undefined {
        return this['hook_version'];
    }
    public withHookVersionDescription(hookVersionDescription: string): CreatePrivateHookVersionRequestBody {
        this['hook_version_description'] = hookVersionDescription;
        return this;
    }
    public set hookVersionDescription(hookVersionDescription: string  | undefined) {
        this['hook_version_description'] = hookVersionDescription;
    }
    public get hookVersionDescription(): string | undefined {
        return this['hook_version_description'];
    }
    public withPolicyUri(policyUri: string): CreatePrivateHookVersionRequestBody {
        this['policy_uri'] = policyUri;
        return this;
    }
    public set policyUri(policyUri: string  | undefined) {
        this['policy_uri'] = policyUri;
    }
    public get policyUri(): string | undefined {
        return this['policy_uri'];
    }
    public withPolicyBody(policyBody: string): CreatePrivateHookVersionRequestBody {
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