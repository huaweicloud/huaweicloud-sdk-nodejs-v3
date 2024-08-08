import { ConfigurationPrimitiveTypeHolder } from './ConfigurationPrimitiveTypeHolder';
import { ConfigurationPrimitiveTypeHolderConfiguration } from './ConfigurationPrimitiveTypeHolderConfiguration';
import { PrivateHookCreateTimePrimitiveTypeHolder } from './PrivateHookCreateTimePrimitiveTypeHolder';
import { PrivateHookDefaultVersionPrimitiveTypeHolder } from './PrivateHookDefaultVersionPrimitiveTypeHolder';
import { PrivateHookDescriptionPrimitiveTypeHolder } from './PrivateHookDescriptionPrimitiveTypeHolder';
import { PrivateHookIdPrimitiveTypeHolder } from './PrivateHookIdPrimitiveTypeHolder';
import { PrivateHookNamePrimitiveTypeHolder } from './PrivateHookNamePrimitiveTypeHolder';
import { PrivateHookUpdateTimePrimitiveTypeHolder } from './PrivateHookUpdateTimePrimitiveTypeHolder';


export class PrivateHookSummary {
    private 'hook_name'?: string;
    private 'hook_id'?: string;
    private 'hook_description'?: string;
    private 'default_version'?: string;
    public configuration?: ConfigurationPrimitiveTypeHolderConfiguration;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(hookName?: string) { 
        this['hook_name'] = hookName;
    }
    public withHookName(hookName: string): PrivateHookSummary {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookId(hookId: string): PrivateHookSummary {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withHookDescription(hookDescription: string): PrivateHookSummary {
        this['hook_description'] = hookDescription;
        return this;
    }
    public set hookDescription(hookDescription: string  | undefined) {
        this['hook_description'] = hookDescription;
    }
    public get hookDescription(): string | undefined {
        return this['hook_description'];
    }
    public withDefaultVersion(defaultVersion: string): PrivateHookSummary {
        this['default_version'] = defaultVersion;
        return this;
    }
    public set defaultVersion(defaultVersion: string  | undefined) {
        this['default_version'] = defaultVersion;
    }
    public get defaultVersion(): string | undefined {
        return this['default_version'];
    }
    public withConfiguration(configuration: ConfigurationPrimitiveTypeHolderConfiguration): PrivateHookSummary {
        this['configuration'] = configuration;
        return this;
    }
    public withCreateTime(createTime: string): PrivateHookSummary {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): PrivateHookSummary {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}