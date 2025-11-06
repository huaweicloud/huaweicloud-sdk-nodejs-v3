import { DiffDto } from './DiffDto';
import { DiffRefsDto } from './DiffRefsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommitDiffMetadataResponse extends SdkResponse {
    public diffs?: Array<DiffDto>;
    private 'diff_refs'?: DiffRefsDto;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    private 'change_file_count'?: number;
    private 'change_line_count'?: number;
    private 'too_large'?: boolean;
    public constructor() { 
        super();
    }
    public withDiffs(diffs: Array<DiffDto>): ShowCommitDiffMetadataResponse {
        this['diffs'] = diffs;
        return this;
    }
    public withDiffRefs(diffRefs: DiffRefsDto): ShowCommitDiffMetadataResponse {
        this['diff_refs'] = diffRefs;
        return this;
    }
    public set diffRefs(diffRefs: DiffRefsDto  | undefined) {
        this['diff_refs'] = diffRefs;
    }
    public get diffRefs(): DiffRefsDto | undefined {
        return this['diff_refs'];
    }
    public withAddedLines(addedLines: number): ShowCommitDiffMetadataResponse {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): ShowCommitDiffMetadataResponse {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
    public withChangeFileCount(changeFileCount: number): ShowCommitDiffMetadataResponse {
        this['change_file_count'] = changeFileCount;
        return this;
    }
    public set changeFileCount(changeFileCount: number  | undefined) {
        this['change_file_count'] = changeFileCount;
    }
    public get changeFileCount(): number | undefined {
        return this['change_file_count'];
    }
    public withChangeLineCount(changeLineCount: number): ShowCommitDiffMetadataResponse {
        this['change_line_count'] = changeLineCount;
        return this;
    }
    public set changeLineCount(changeLineCount: number  | undefined) {
        this['change_line_count'] = changeLineCount;
    }
    public get changeLineCount(): number | undefined {
        return this['change_line_count'];
    }
    public withTooLarge(tooLarge: boolean): ShowCommitDiffMetadataResponse {
        this['too_large'] = tooLarge;
        return this;
    }
    public set tooLarge(tooLarge: boolean  | undefined) {
        this['too_large'] = tooLarge;
    }
    public get tooLarge(): boolean | undefined {
        return this['too_large'];
    }
}