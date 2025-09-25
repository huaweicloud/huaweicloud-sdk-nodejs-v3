
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlPatchResponse extends SdkResponse {
    private 'patch_name'?: string;
    public hint?: string;
    private 'patch_status'?: string;
    public constructor() { 
        super();
    }
    public withPatchName(patchName: string): ShowSqlPatchResponse {
        this['patch_name'] = patchName;
        return this;
    }
    public set patchName(patchName: string  | undefined) {
        this['patch_name'] = patchName;
    }
    public get patchName(): string | undefined {
        return this['patch_name'];
    }
    public withHint(hint: string): ShowSqlPatchResponse {
        this['hint'] = hint;
        return this;
    }
    public withPatchStatus(patchStatus: string): ShowSqlPatchResponse {
        this['patch_status'] = patchStatus;
        return this;
    }
    public set patchStatus(patchStatus: string  | undefined) {
        this['patch_status'] = patchStatus;
    }
    public get patchStatus(): string | undefined {
        return this['patch_status'];
    }
}