
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantDevelopModeResponse extends SdkResponse {
    private 'cr_enable'?: boolean;
    private 'repo_encryption_enabled'?: boolean;
    public constructor() { 
        super();
    }
    public withCrEnable(crEnable: boolean): ShowTenantDevelopModeResponse {
        this['cr_enable'] = crEnable;
        return this;
    }
    public set crEnable(crEnable: boolean  | undefined) {
        this['cr_enable'] = crEnable;
    }
    public get crEnable(): boolean | undefined {
        return this['cr_enable'];
    }
    public withRepoEncryptionEnabled(repoEncryptionEnabled: boolean): ShowTenantDevelopModeResponse {
        this['repo_encryption_enabled'] = repoEncryptionEnabled;
        return this;
    }
    public set repoEncryptionEnabled(repoEncryptionEnabled: boolean  | undefined) {
        this['repo_encryption_enabled'] = repoEncryptionEnabled;
    }
    public get repoEncryptionEnabled(): boolean | undefined {
        return this['repo_encryption_enabled'];
    }
}