import { PrivateHookVersionSummary } from './PrivateHookVersionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateHookVersionMetadataResponse extends SdkResponse {
    private 'hook_name'?: string;
    private 'hook_id'?: string;
    private 'hook_version'?: string;
    private 'hook_version_description'?: string;
    private 'create_time'?: string;
    public constructor(hookName?: string, hookVersion?: string) { 
        super();
        this['hook_name'] = hookName;
        this['hook_version'] = hookVersion;
    }
    public withHookName(hookName: string): ShowPrivateHookVersionMetadataResponse {
        this['hook_name'] = hookName;
        return this;
    }
    public set hookName(hookName: string  | undefined) {
        this['hook_name'] = hookName;
    }
    public get hookName(): string | undefined {
        return this['hook_name'];
    }
    public withHookId(hookId: string): ShowPrivateHookVersionMetadataResponse {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withHookVersion(hookVersion: string): ShowPrivateHookVersionMetadataResponse {
        this['hook_version'] = hookVersion;
        return this;
    }
    public set hookVersion(hookVersion: string  | undefined) {
        this['hook_version'] = hookVersion;
    }
    public get hookVersion(): string | undefined {
        return this['hook_version'];
    }
    public withHookVersionDescription(hookVersionDescription: string): ShowPrivateHookVersionMetadataResponse {
        this['hook_version_description'] = hookVersionDescription;
        return this;
    }
    public set hookVersionDescription(hookVersionDescription: string  | undefined) {
        this['hook_version_description'] = hookVersionDescription;
    }
    public get hookVersionDescription(): string | undefined {
        return this['hook_version_description'];
    }
    public withCreateTime(createTime: string): ShowPrivateHookVersionMetadataResponse {
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