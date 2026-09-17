import { IssuesInfo } from './IssuesInfo';


export class AddIssuesToIteratorRequest {
    private 'project_uuid'?: string;
    private 'iterator_uri'?: string;
    public body?: IssuesInfo;
    public constructor(projectUuid?: string, iteratorUri?: string) { 
        this['project_uuid'] = projectUuid;
        this['iterator_uri'] = iteratorUri;
    }
    public withProjectUuid(projectUuid: string): AddIssuesToIteratorRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withIteratorUri(iteratorUri: string): AddIssuesToIteratorRequest {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withBody(body: IssuesInfo): AddIssuesToIteratorRequest {
        this['body'] = body;
        return this;
    }
}