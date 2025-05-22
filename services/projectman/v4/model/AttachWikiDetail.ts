import { SimpleProject } from './SimpleProject';
import { SimpleUser } from './SimpleUser';


export class AttachWikiDetail {
    private 'issue_id'?: number;
    private 'wiki_title'?: string;
    private 'wiki_author'?: SimpleUser;
    public project?: SimpleProject;
    private 'created_date'?: string;
    private 'wiki_id'?: string;
    public region?: string;
    public constructor() { 
    }
    public withIssueId(issueId: number): AttachWikiDetail {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withWikiTitle(wikiTitle: string): AttachWikiDetail {
        this['wiki_title'] = wikiTitle;
        return this;
    }
    public set wikiTitle(wikiTitle: string  | undefined) {
        this['wiki_title'] = wikiTitle;
    }
    public get wikiTitle(): string | undefined {
        return this['wiki_title'];
    }
    public withWikiAuthor(wikiAuthor: SimpleUser): AttachWikiDetail {
        this['wiki_author'] = wikiAuthor;
        return this;
    }
    public set wikiAuthor(wikiAuthor: SimpleUser  | undefined) {
        this['wiki_author'] = wikiAuthor;
    }
    public get wikiAuthor(): SimpleUser | undefined {
        return this['wiki_author'];
    }
    public withProject(project: SimpleProject): AttachWikiDetail {
        this['project'] = project;
        return this;
    }
    public withCreatedDate(createdDate: string): AttachWikiDetail {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withWikiId(wikiId: string): AttachWikiDetail {
        this['wiki_id'] = wikiId;
        return this;
    }
    public set wikiId(wikiId: string  | undefined) {
        this['wiki_id'] = wikiId;
    }
    public get wikiId(): string | undefined {
        return this['wiki_id'];
    }
    public withRegion(region: string): AttachWikiDetail {
        this['region'] = region;
        return this;
    }
}