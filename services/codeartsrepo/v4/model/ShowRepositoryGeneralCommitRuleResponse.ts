
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryGeneralCommitRuleResponse extends SdkResponse {
    private 'reject_unsigned_commits'?: boolean;
    private 'reject_not_signed_by_gpg'?: boolean;
    private 'deny_delete_tag'?: boolean;
    private 'prevent_secrets'?: boolean;
    private 'deny_force_push'?: boolean;
    public constructor() { 
        super();
    }
    public withRejectUnsignedCommits(rejectUnsignedCommits: boolean): ShowRepositoryGeneralCommitRuleResponse {
        this['reject_unsigned_commits'] = rejectUnsignedCommits;
        return this;
    }
    public set rejectUnsignedCommits(rejectUnsignedCommits: boolean  | undefined) {
        this['reject_unsigned_commits'] = rejectUnsignedCommits;
    }
    public get rejectUnsignedCommits(): boolean | undefined {
        return this['reject_unsigned_commits'];
    }
    public withRejectNotSignedByGpg(rejectNotSignedByGpg: boolean): ShowRepositoryGeneralCommitRuleResponse {
        this['reject_not_signed_by_gpg'] = rejectNotSignedByGpg;
        return this;
    }
    public set rejectNotSignedByGpg(rejectNotSignedByGpg: boolean  | undefined) {
        this['reject_not_signed_by_gpg'] = rejectNotSignedByGpg;
    }
    public get rejectNotSignedByGpg(): boolean | undefined {
        return this['reject_not_signed_by_gpg'];
    }
    public withDenyDeleteTag(denyDeleteTag: boolean): ShowRepositoryGeneralCommitRuleResponse {
        this['deny_delete_tag'] = denyDeleteTag;
        return this;
    }
    public set denyDeleteTag(denyDeleteTag: boolean  | undefined) {
        this['deny_delete_tag'] = denyDeleteTag;
    }
    public get denyDeleteTag(): boolean | undefined {
        return this['deny_delete_tag'];
    }
    public withPreventSecrets(preventSecrets: boolean): ShowRepositoryGeneralCommitRuleResponse {
        this['prevent_secrets'] = preventSecrets;
        return this;
    }
    public set preventSecrets(preventSecrets: boolean  | undefined) {
        this['prevent_secrets'] = preventSecrets;
    }
    public get preventSecrets(): boolean | undefined {
        return this['prevent_secrets'];
    }
    public withDenyForcePush(denyForcePush: boolean): ShowRepositoryGeneralCommitRuleResponse {
        this['deny_force_push'] = denyForcePush;
        return this;
    }
    public set denyForcePush(denyForcePush: boolean  | undefined) {
        this['deny_force_push'] = denyForcePush;
    }
    public get denyForcePush(): boolean | undefined {
        return this['deny_force_push'];
    }
}