import { PrivateHookIdPrimitiveTypeHolder } from './PrivateHookIdPrimitiveTypeHolder';
import { PrivateHookNamePrimitiveTypeHolder } from './PrivateHookNamePrimitiveTypeHolder';
import { PrivateHookVersionCreateTimePrimitiveTypeHolder } from './PrivateHookVersionCreateTimePrimitiveTypeHolder';
import { PrivateHookVersionDescriptionPrimitiveTypeHolder } from './PrivateHookVersionDescriptionPrimitiveTypeHolder';
import { PrivateHookVersionPrimitiveTypeHolder } from './PrivateHookVersionPrimitiveTypeHolder';


export class PrivateHookVersionSummary {
    private 'hook_name'?: string;
    private 'hook_id'?: string;
    private 'hook_version'?: string;
    private 'hook_version_description'?: string;
    private 'create_time'?: string;
    public constructor(hookName?: string, hookVersion?: string) { 
        this['hook_name'] = hookName;
        this['hook_version'] = hookVersion;
    }
    public withHookName(hookName: string): PrivateHookVersionSummary {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookId(hookId: string): PrivateHookVersionSummary {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withHookVersion(hookVersion: string): PrivateHookVersionSummary {
        this['hook_version'] = hookVersion;
        return this;
    }
    public set hookVersion(hookVersion: string  | undefined) {
        this['hook_version'] = hookVersion;
    }
    public get hookVersion(): string | undefined {
        return this['hook_version'];
    }
    public withHookVersionDescription(hookVersionDescription: string): PrivateHookVersionSummary {
        this['hook_version_description'] = hookVersionDescription;
        return this;
    }
    public set hookVersionDescription(hookVersionDescription: string  | undefined) {
        this['hook_version_description'] = hookVersionDescription;
    }
    public get hookVersionDescription(): string | undefined {
        return this['hook_version_description'];
    }
    public withCreateTime(createTime: string): PrivateHookVersionSummary {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}