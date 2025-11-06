import { ImportMrParamsDto } from './ImportMrParamsDto';


export class ImportMergeRequestRequest {
    private 'repository_id'?: number;
    public body?: ImportMrParamsDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ImportMergeRequestRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: ImportMrParamsDto): ImportMergeRequestRequest {
        this['body'] = body;
        return this;
    }
}