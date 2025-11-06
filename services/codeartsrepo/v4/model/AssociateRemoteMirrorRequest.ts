import { RemoteMirrorDto } from './RemoteMirrorDto';


export class AssociateRemoteMirrorRequest {
    private 'repository_id'?: number;
    public body?: RemoteMirrorDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AssociateRemoteMirrorRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: RemoteMirrorDto): AssociateRemoteMirrorRequest {
        this['body'] = body;
        return this;
    }
}