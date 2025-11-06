
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateProjectGeneralPolicyResponse extends SdkResponse {
    private 'disable_fork'?: boolean;
    private 'branch_name_regex'?: string;
    private 'tag_name_regex'?: string;
    private 'generate_pre_merge_ref'?: boolean;
    public constructor() { 
        super();
    }
    public withDisableFork(disableFork: boolean): UpdateProjectGeneralPolicyResponse {
        this['disable_fork'] = disableFork;
        return this;
    }
    public set disableFork(disableFork: boolean  | undefined) {
        this['disable_fork'] = disableFork;
    }
    public get disableFork(): boolean | undefined {
        return this['disable_fork'];
    }
    public withBranchNameRegex(branchNameRegex: string): UpdateProjectGeneralPolicyResponse {
        this['branch_name_regex'] = branchNameRegex;
        return this;
    }
    public set branchNameRegex(branchNameRegex: string  | undefined) {
        this['branch_name_regex'] = branchNameRegex;
    }
    public get branchNameRegex(): string | undefined {
        return this['branch_name_regex'];
    }
    public withTagNameRegex(tagNameRegex: string): UpdateProjectGeneralPolicyResponse {
        this['tag_name_regex'] = tagNameRegex;
        return this;
    }
    public set tagNameRegex(tagNameRegex: string  | undefined) {
        this['tag_name_regex'] = tagNameRegex;
    }
    public get tagNameRegex(): string | undefined {
        return this['tag_name_regex'];
    }
    public withGeneratePreMergeRef(generatePreMergeRef: boolean): UpdateProjectGeneralPolicyResponse {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
        return this;
    }
    public set generatePreMergeRef(generatePreMergeRef: boolean  | undefined) {
        this['generate_pre_merge_ref'] = generatePreMergeRef;
    }
    public get generatePreMergeRef(): boolean | undefined {
        return this['generate_pre_merge_ref'];
    }
}