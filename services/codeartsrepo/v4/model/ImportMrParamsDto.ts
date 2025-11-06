import { ApproverParamDto } from './ApproverParamDto';
import { DiffRefsParamDto } from './DiffRefsParamDto';


export class ImportMrParamsDto {
    public iid?: number;
    private 'source_uniq_key'?: string;
    private 'author_id'?: number;
    public state?: ImportMrParamsDtoStateEnum | string;
    public title?: string;
    public description?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    private 'target_repository_id'?: string;
    public labels?: object;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'merged_at'?: string;
    private 'closed_at'?: string;
    public approvers?: Array<ApproverParamDto>;
    private 'diff_refs'?: Array<DiffRefsParamDto>;
    public squash?: boolean;
    private 'remove_source_branch'?: boolean;
    private 'branch_is_deleted'?: boolean;
    public fork?: boolean;
    private 'import_source_from'?: string;
    public constructor(iid?: number, sourceUniqKey?: string, state?: string, sourceBranch?: string, targetBranch?: string, targetRepositoryId?: string, diffRefs?: Array<DiffRefsParamDto>) { 
        this['iid'] = iid;
        this['source_uniq_key'] = sourceUniqKey;
        this['state'] = state;
        this['source_branch'] = sourceBranch;
        this['target_branch'] = targetBranch;
        this['target_repository_id'] = targetRepositoryId;
        this['diff_refs'] = diffRefs;
    }
    public withIid(iid: number): ImportMrParamsDto {
        this['iid'] = iid;
        return this;
    }
    public withSourceUniqKey(sourceUniqKey: string): ImportMrParamsDto {
        this['source_uniq_key'] = sourceUniqKey;
        return this;
    }
    public set sourceUniqKey(sourceUniqKey: string  | undefined) {
        this['source_uniq_key'] = sourceUniqKey;
    }
    public get sourceUniqKey(): string | undefined {
        return this['source_uniq_key'];
    }
    public withAuthorId(authorId: number): ImportMrParamsDto {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: number  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): number | undefined {
        return this['author_id'];
    }
    public withState(state: ImportMrParamsDtoStateEnum | string): ImportMrParamsDto {
        this['state'] = state;
        return this;
    }
    public withTitle(title: string): ImportMrParamsDto {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ImportMrParamsDto {
        this['description'] = description;
        return this;
    }
    public withSourceBranch(sourceBranch: string): ImportMrParamsDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ImportMrParamsDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withTargetRepositoryId(targetRepositoryId: string): ImportMrParamsDto {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: string  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): string | undefined {
        return this['target_repository_id'];
    }
    public withLabels(labels: object): ImportMrParamsDto {
        this['labels'] = labels;
        return this;
    }
    public withCreatedAt(createdAt: string): ImportMrParamsDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ImportMrParamsDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withMergedAt(mergedAt: string): ImportMrParamsDto {
        this['merged_at'] = mergedAt;
        return this;
    }
    public set mergedAt(mergedAt: string  | undefined) {
        this['merged_at'] = mergedAt;
    }
    public get mergedAt(): string | undefined {
        return this['merged_at'];
    }
    public withClosedAt(closedAt: string): ImportMrParamsDto {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withApprovers(approvers: Array<ApproverParamDto>): ImportMrParamsDto {
        this['approvers'] = approvers;
        return this;
    }
    public withDiffRefs(diffRefs: Array<DiffRefsParamDto>): ImportMrParamsDto {
        this['diff_refs'] = diffRefs;
        return this;
    }
    public set diffRefs(diffRefs: Array<DiffRefsParamDto>  | undefined) {
        this['diff_refs'] = diffRefs;
    }
    public get diffRefs(): Array<DiffRefsParamDto> | undefined {
        return this['diff_refs'];
    }
    public withSquash(squash: boolean): ImportMrParamsDto {
        this['squash'] = squash;
        return this;
    }
    public withRemoveSourceBranch(removeSourceBranch: boolean): ImportMrParamsDto {
        this['remove_source_branch'] = removeSourceBranch;
        return this;
    }
    public set removeSourceBranch(removeSourceBranch: boolean  | undefined) {
        this['remove_source_branch'] = removeSourceBranch;
    }
    public get removeSourceBranch(): boolean | undefined {
        return this['remove_source_branch'];
    }
    public withBranchIsDeleted(branchIsDeleted: boolean): ImportMrParamsDto {
        this['branch_is_deleted'] = branchIsDeleted;
        return this;
    }
    public set branchIsDeleted(branchIsDeleted: boolean  | undefined) {
        this['branch_is_deleted'] = branchIsDeleted;
    }
    public get branchIsDeleted(): boolean | undefined {
        return this['branch_is_deleted'];
    }
    public withFork(fork: boolean): ImportMrParamsDto {
        this['fork'] = fork;
        return this;
    }
    public withImportSourceFrom(importSourceFrom: string): ImportMrParamsDto {
        this['import_source_from'] = importSourceFrom;
        return this;
    }
    public set importSourceFrom(importSourceFrom: string  | undefined) {
        this['import_source_from'] = importSourceFrom;
    }
    public get importSourceFrom(): string | undefined {
        return this['import_source_from'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportMrParamsDtoStateEnum {
    OPENED = 'opened',
    CLOSED = 'closed',
    MERGED = 'merged'
}
