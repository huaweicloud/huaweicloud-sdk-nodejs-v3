import { CommitDto } from './CommitDto';
import { ConflictFileDto } from './ConflictFileDto';
import { DiffDto } from './DiffDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRefCompareResponse extends SdkResponse {
    public commit?: CommitDto;
    public commits?: Array<CommitDto>;
    public diffs?: Array<DiffDto>;
    private 'diffs_files'?: Array<DiffDto>;
    private 'compare_timeout'?: boolean;
    private 'compare_same_ref'?: boolean;
    private 'conflict_files'?: Array<ConflictFileDto>;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    private 'commits_count'?: number;
    private 'diffs_count'?: number;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withCommit(commit: CommitDto): ShowRefCompareResponse {
        this['commit'] = commit;
        return this;
    }
    public withCommits(commits: Array<CommitDto>): ShowRefCompareResponse {
        this['commits'] = commits;
        return this;
    }
    public withDiffs(diffs: Array<DiffDto>): ShowRefCompareResponse {
        this['diffs'] = diffs;
        return this;
    }
    public withDiffsFiles(diffsFiles: Array<DiffDto>): ShowRefCompareResponse {
        this['diffs_files'] = diffsFiles;
        return this;
    }
    public set diffsFiles(diffsFiles: Array<DiffDto>  | undefined) {
        this['diffs_files'] = diffsFiles;
    }
    public get diffsFiles(): Array<DiffDto> | undefined {
        return this['diffs_files'];
    }
    public withCompareTimeout(compareTimeout: boolean): ShowRefCompareResponse {
        this['compare_timeout'] = compareTimeout;
        return this;
    }
    public set compareTimeout(compareTimeout: boolean  | undefined) {
        this['compare_timeout'] = compareTimeout;
    }
    public get compareTimeout(): boolean | undefined {
        return this['compare_timeout'];
    }
    public withCompareSameRef(compareSameRef: boolean): ShowRefCompareResponse {
        this['compare_same_ref'] = compareSameRef;
        return this;
    }
    public set compareSameRef(compareSameRef: boolean  | undefined) {
        this['compare_same_ref'] = compareSameRef;
    }
    public get compareSameRef(): boolean | undefined {
        return this['compare_same_ref'];
    }
    public withConflictFiles(conflictFiles: Array<ConflictFileDto>): ShowRefCompareResponse {
        this['conflict_files'] = conflictFiles;
        return this;
    }
    public set conflictFiles(conflictFiles: Array<ConflictFileDto>  | undefined) {
        this['conflict_files'] = conflictFiles;
    }
    public get conflictFiles(): Array<ConflictFileDto> | undefined {
        return this['conflict_files'];
    }
    public withAddedLines(addedLines: number): ShowRefCompareResponse {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): ShowRefCompareResponse {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
    public withCommitsCount(commitsCount: number): ShowRefCompareResponse {
        this['commits_count'] = commitsCount;
        return this;
    }
    public set commitsCount(commitsCount: number  | undefined) {
        this['commits_count'] = commitsCount;
    }
    public get commitsCount(): number | undefined {
        return this['commits_count'];
    }
    public withDiffsCount(diffsCount: number): ShowRefCompareResponse {
        this['diffs_count'] = diffsCount;
        return this;
    }
    public set diffsCount(diffsCount: number  | undefined) {
        this['diffs_count'] = diffsCount;
    }
    public get diffsCount(): number | undefined {
        return this['diffs_count'];
    }
    public withXTotal(xTotal: string): ShowRefCompareResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}