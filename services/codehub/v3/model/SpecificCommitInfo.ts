import { SpecificCommitInfoLastPipeline } from './SpecificCommitInfoLastPipeline';
import { SpecificCommitInfoStats } from './SpecificCommitInfoStats';


export class SpecificCommitInfo {
    public id?: string;
    private 'short_id'?: string;
    public title?: string;
    private 'author_name'?: string;
    private 'author_email'?: string;
    private 'committer_name'?: string;
    private 'committer_email'?: string;
    private 'created_at'?: string;
    public message?: string;
    private 'parent_ids'?: Array<string>;
    private 'committed_date'?: Date;
    private 'authored_date'?: Date;
    public stats?: SpecificCommitInfoStats;
    private 'last_pipeline'?: SpecificCommitInfoLastPipeline;
    public constructor() { 
    }
    public withId(id: string): SpecificCommitInfo {
        this['id'] = id;
        return this;
    }
    public withShortId(shortId: string): SpecificCommitInfo {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withTitle(title: string): SpecificCommitInfo {
        this['title'] = title;
        return this;
    }
    public withAuthorName(authorName: string): SpecificCommitInfo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthorEmail(authorEmail: string): SpecificCommitInfo {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withCommitterName(committerName: string): SpecificCommitInfo {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withCommitterEmail(committerEmail: string): SpecificCommitInfo {
        this['committer_email'] = committerEmail;
        return this;
    }
    public set committerEmail(committerEmail: string  | undefined) {
        this['committer_email'] = committerEmail;
    }
    public get committerEmail(): string | undefined {
        return this['committer_email'];
    }
    public withCreatedAt(createdAt: string): SpecificCommitInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withMessage(message: string): SpecificCommitInfo {
        this['message'] = message;
        return this;
    }
    public withParentIds(parentIds: Array<string>): SpecificCommitInfo {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withCommittedDate(committedDate: Date): SpecificCommitInfo {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: Date  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): Date | undefined {
        return this['committed_date'];
    }
    public withAuthoredDate(authoredDate: Date): SpecificCommitInfo {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: Date  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): Date | undefined {
        return this['authored_date'];
    }
    public withStats(stats: SpecificCommitInfoStats): SpecificCommitInfo {
        this['stats'] = stats;
        return this;
    }
    public withLastPipeline(lastPipeline: SpecificCommitInfoLastPipeline): SpecificCommitInfo {
        this['last_pipeline'] = lastPipeline;
        return this;
    }
    public set lastPipeline(lastPipeline: SpecificCommitInfoLastPipeline  | undefined) {
        this['last_pipeline'] = lastPipeline;
    }
    public get lastPipeline(): SpecificCommitInfoLastPipeline | undefined {
        return this['last_pipeline'];
    }
}