import { BranchSimpleDto } from './BranchSimpleDto';
import { CommitDto } from './CommitDto';
import { DivergingCommitCounts } from './DivergingCommitCounts';
import { PipelineBasicDto } from './PipelineBasicDto';
import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBranchResponse extends SdkResponse {
    public name?: string;
    private 'default'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_read'?: boolean;
    private 'can_download'?: boolean;
    private 'can_push'?: boolean;
    public commit?: CommitDto;
    public merged?: boolean;
    private 'protected'?: boolean;
    private 'created_at'?: string;
    public creator?: UserBasicDto;
    public description?: string;
    private 'create_source'?: string;
    private 'create_source_exists'?: boolean;
    private 'latest_pipeline'?: PipelineBasicDto;
    private 'opened_mr_count'?: number;
    private 'diverging_commit_counts'?: DivergingCommitCounts;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateBranchResponse {
        this['name'] = name;
        return this;
    }
    public withDefault(_default: boolean): CreateBranchResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withCanDelete(canDelete: boolean): CreateBranchResponse {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanRead(canRead: boolean): CreateBranchResponse {
        this['can_read'] = canRead;
        return this;
    }
    public set canRead(canRead: boolean  | undefined) {
        this['can_read'] = canRead;
    }
    public get canRead(): boolean | undefined {
        return this['can_read'];
    }
    public withCanDownload(canDownload: boolean): CreateBranchResponse {
        this['can_download'] = canDownload;
        return this;
    }
    public set canDownload(canDownload: boolean  | undefined) {
        this['can_download'] = canDownload;
    }
    public get canDownload(): boolean | undefined {
        return this['can_download'];
    }
    public withCanPush(canPush: boolean): CreateBranchResponse {
        this['can_push'] = canPush;
        return this;
    }
    public set canPush(canPush: boolean  | undefined) {
        this['can_push'] = canPush;
    }
    public get canPush(): boolean | undefined {
        return this['can_push'];
    }
    public withCommit(commit: CommitDto): CreateBranchResponse {
        this['commit'] = commit;
        return this;
    }
    public withMerged(merged: boolean): CreateBranchResponse {
        this['merged'] = merged;
        return this;
    }
    public withProtected(_protected: boolean): CreateBranchResponse {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
    public withCreatedAt(createdAt: string): CreateBranchResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withCreator(creator: UserBasicDto): CreateBranchResponse {
        this['creator'] = creator;
        return this;
    }
    public withDescription(description: string): CreateBranchResponse {
        this['description'] = description;
        return this;
    }
    public withCreateSource(createSource: string): CreateBranchResponse {
        this['create_source'] = createSource;
        return this;
    }
    public set createSource(createSource: string  | undefined) {
        this['create_source'] = createSource;
    }
    public get createSource(): string | undefined {
        return this['create_source'];
    }
    public withCreateSourceExists(createSourceExists: boolean): CreateBranchResponse {
        this['create_source_exists'] = createSourceExists;
        return this;
    }
    public set createSourceExists(createSourceExists: boolean  | undefined) {
        this['create_source_exists'] = createSourceExists;
    }
    public get createSourceExists(): boolean | undefined {
        return this['create_source_exists'];
    }
    public withLatestPipeline(latestPipeline: PipelineBasicDto): CreateBranchResponse {
        this['latest_pipeline'] = latestPipeline;
        return this;
    }
    public set latestPipeline(latestPipeline: PipelineBasicDto  | undefined) {
        this['latest_pipeline'] = latestPipeline;
    }
    public get latestPipeline(): PipelineBasicDto | undefined {
        return this['latest_pipeline'];
    }
    public withOpenedMrCount(openedMrCount: number): CreateBranchResponse {
        this['opened_mr_count'] = openedMrCount;
        return this;
    }
    public set openedMrCount(openedMrCount: number  | undefined) {
        this['opened_mr_count'] = openedMrCount;
    }
    public get openedMrCount(): number | undefined {
        return this['opened_mr_count'];
    }
    public withDivergingCommitCounts(divergingCommitCounts: DivergingCommitCounts): CreateBranchResponse {
        this['diverging_commit_counts'] = divergingCommitCounts;
        return this;
    }
    public set divergingCommitCounts(divergingCommitCounts: DivergingCommitCounts  | undefined) {
        this['diverging_commit_counts'] = divergingCommitCounts;
    }
    public get divergingCommitCounts(): DivergingCommitCounts | undefined {
        return this['diverging_commit_counts'];
    }
}