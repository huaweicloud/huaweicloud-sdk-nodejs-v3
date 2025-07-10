import { RepositoryTemplateVO } from './RepositoryTemplateVO';


export class ShareTemplatesRequest {
    private 'repository_uuid'?: string;
    public body?: RepositoryTemplateVO;
    public constructor(repositoryUuid?: string) { 
        this['repository_uuid'] = repositoryUuid;
    }
    public withRepositoryUuid(repositoryUuid: string): ShareTemplatesRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withBody(body: RepositoryTemplateVO): ShareTemplatesRequest {
        this['body'] = body;
        return this;
    }
}