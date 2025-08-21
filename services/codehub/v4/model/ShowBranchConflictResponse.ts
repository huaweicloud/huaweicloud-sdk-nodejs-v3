
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBranchConflictResponse extends SdkResponse {
    private 'source_repository_id'?: number;
    private 'target_repository_id'?: number;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    private 'is_conflict'?: boolean;
    public constructor() { 
        super();
    }
    public withSourceRepositoryId(sourceRepositoryId: number): ShowBranchConflictResponse {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withTargetRepositoryId(targetRepositoryId: number): ShowBranchConflictResponse {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: number  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): number | undefined {
        return this['target_repository_id'];
    }
    public withSourceBranch(sourceBranch: string): ShowBranchConflictResponse {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ShowBranchConflictResponse {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withIsConflict(isConflict: boolean): ShowBranchConflictResponse {
        this['is_conflict'] = isConflict;
        return this;
    }
    public set isConflict(isConflict: boolean  | undefined) {
        this['is_conflict'] = isConflict;
    }
    public get isConflict(): boolean | undefined {
        return this['is_conflict'];
    }
}