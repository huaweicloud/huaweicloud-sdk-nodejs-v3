import { CommitV2 } from './CommitV2';
import { DivergingCommitCounts } from './DivergingCommitCounts';


export class BranchesItem {
    public commit?: CommitV2;
    private 'diverging_commit_counts'?: DivergingCommitCounts;
    public name?: string;
    public constructor() { 
    }
    public withCommit(commit: CommitV2): BranchesItem {
        this['commit'] = commit;
        return this;
    }
    public withDivergingCommitCounts(divergingCommitCounts: DivergingCommitCounts): BranchesItem {
        this['diverging_commit_counts'] = divergingCommitCounts;
        return this;
    }
    public set divergingCommitCounts(divergingCommitCounts: DivergingCommitCounts  | undefined) {
        this['diverging_commit_counts'] = divergingCommitCounts;
    }
    public get divergingCommitCounts(): DivergingCommitCounts | undefined {
        return this['diverging_commit_counts'];
    }
    public withName(name: string): BranchesItem {
        this['name'] = name;
        return this;
    }
}