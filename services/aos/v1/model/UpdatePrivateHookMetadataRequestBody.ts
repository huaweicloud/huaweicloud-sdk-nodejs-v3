import { ConfigurationPrimitiveTypeHolder } from './ConfigurationPrimitiveTypeHolder';
import { ConfigurationPrimitiveTypeHolderConfiguration } from './ConfigurationPrimitiveTypeHolderConfiguration';
import { PrivateHookDefaultVersionPrimitiveTypeHolder } from './PrivateHookDefaultVersionPrimitiveTypeHolder';
import { PrivateHookDescriptionPrimitiveTypeHolder } from './PrivateHookDescriptionPrimitiveTypeHolder';
import { PrivateHookIdPrimitiveTypeHolder } from './PrivateHookIdPrimitiveTypeHolder';


export class UpdatePrivateHookMetadataRequestBody {
    private 'hook_description'?: string;
    private 'hook_id'?: string;
    private 'default_version'?: string;
    public configuration?: ConfigurationPrimitiveTypeHolderConfiguration;
    public constructor() { 
    }
    public withHookDescription(hookDescription: string): UpdatePrivateHookMetadataRequestBody {
        this['hook_description'] = hookDescription;
        return this;
    }
    public set hookDescription(hookDescription: string  | undefined) {
        this['hook_description'] = hookDescription;
    }
    public get hookDescription(): string | undefined {
        return this['hook_description'];
    }
    public withHookId(hookId: string): UpdatePrivateHookMetadataRequestBody {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withDefaultVersion(defaultVersion: string): UpdatePrivateHookMetadataRequestBody {
        this['default_version'] = defaultVersion;
        return this;
    }
    public set defaultVersion(defaultVersion: string  | undefined) {
        this['default_version'] = defaultVersion;
    }
    public get defaultVersion(): string | undefined {
        return this['default_version'];
    }
    public withConfiguration(configuration: ConfigurationPrimitiveTypeHolderConfiguration): UpdatePrivateHookMetadataRequestBody {
        this['configuration'] = configuration;
        return this;
    }
}