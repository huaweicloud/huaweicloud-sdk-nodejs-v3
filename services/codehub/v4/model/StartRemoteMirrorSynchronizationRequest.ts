import { RemoteMirrorSyncInfoDto } from './RemoteMirrorSyncInfoDto';


export class StartRemoteMirrorSynchronizationRequest {
    private 'repository_id'?: number;
    public body?: RemoteMirrorSyncInfoDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): StartRemoteMirrorSynchronizationRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: RemoteMirrorSyncInfoDto): StartRemoteMirrorSynchronizationRequest {
        this['body'] = body;
        return this;
    }
}