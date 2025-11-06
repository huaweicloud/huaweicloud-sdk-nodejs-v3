import { MergeRequestLineChange } from './MergeRequestLineChange';
import { NotesCountDto } from './NotesCountDto';


export class MergeRequestStatisticDto {
    public id?: number;
    public iid?: number;
    public title?: string;
    public state?: string;
    private 'commits_count'?: number;
    private 'changed_files_count'?: string;
    private 'notes_count'?: NotesCountDto;
    private 'changed_lines_count'?: MergeRequestLineChange;
    private 'merge_error'?: string;
    private 'json_merge_error'?: object;
    public votes?: number;
    public constructor() { 
    }
    public withId(id: number): MergeRequestStatisticDto {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): MergeRequestStatisticDto {
        this['iid'] = iid;
        return this;
    }
    public withTitle(title: string): MergeRequestStatisticDto {
        this['title'] = title;
        return this;
    }
    public withState(state: string): MergeRequestStatisticDto {
        this['state'] = state;
        return this;
    }
    public withCommitsCount(commitsCount: number): MergeRequestStatisticDto {
        this['commits_count'] = commitsCount;
        return this;
    }
    public set commitsCount(commitsCount: number  | undefined) {
        this['commits_count'] = commitsCount;
    }
    public get commitsCount(): number | undefined {
        return this['commits_count'];
    }
    public withChangedFilesCount(changedFilesCount: string): MergeRequestStatisticDto {
        this['changed_files_count'] = changedFilesCount;
        return this;
    }
    public set changedFilesCount(changedFilesCount: string  | undefined) {
        this['changed_files_count'] = changedFilesCount;
    }
    public get changedFilesCount(): string | undefined {
        return this['changed_files_count'];
    }
    public withNotesCount(notesCount: NotesCountDto): MergeRequestStatisticDto {
        this['notes_count'] = notesCount;
        return this;
    }
    public set notesCount(notesCount: NotesCountDto  | undefined) {
        this['notes_count'] = notesCount;
    }
    public get notesCount(): NotesCountDto | undefined {
        return this['notes_count'];
    }
    public withChangedLinesCount(changedLinesCount: MergeRequestLineChange): MergeRequestStatisticDto {
        this['changed_lines_count'] = changedLinesCount;
        return this;
    }
    public set changedLinesCount(changedLinesCount: MergeRequestLineChange  | undefined) {
        this['changed_lines_count'] = changedLinesCount;
    }
    public get changedLinesCount(): MergeRequestLineChange | undefined {
        return this['changed_lines_count'];
    }
    public withMergeError(mergeError: string): MergeRequestStatisticDto {
        this['merge_error'] = mergeError;
        return this;
    }
    public set mergeError(mergeError: string  | undefined) {
        this['merge_error'] = mergeError;
    }
    public get mergeError(): string | undefined {
        return this['merge_error'];
    }
    public withJsonMergeError(jsonMergeError: object): MergeRequestStatisticDto {
        this['json_merge_error'] = jsonMergeError;
        return this;
    }
    public set jsonMergeError(jsonMergeError: object  | undefined) {
        this['json_merge_error'] = jsonMergeError;
    }
    public get jsonMergeError(): object | undefined {
        return this['json_merge_error'];
    }
    public withVotes(votes: number): MergeRequestStatisticDto {
        this['votes'] = votes;
        return this;
    }
}