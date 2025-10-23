import { RemoteMirrorUpdateBody } from './RemoteMirrorUpdateBody';


export class UpdateRepositoryRemoteMirrorRequest {
    private 'repository_id'?: number;
    public body?: RemoteMirrorUpdateBody;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryRemoteMirrorRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: RemoteMirrorUpdateBody): UpdateRepositoryRemoteMirrorRequest {
        this['body'] = body;
        return this;
    }
}