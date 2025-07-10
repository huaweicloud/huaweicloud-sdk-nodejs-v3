import { RepositoryTemplateVO2 } from './RepositoryTemplateVO2';


export class ListTemplatesTwoRequest {
    private 'repository_uuid'?: string;
    public body?: RepositoryTemplateVO2;
    public constructor(repositoryUuid?: string) { 
        this['repository_uuid'] = repositoryUuid;
    }
    public withRepositoryUuid(repositoryUuid: string): ListTemplatesTwoRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withBody(body: RepositoryTemplateVO2): ListTemplatesTwoRequest {
        this['body'] = body;
        return this;
    }
}