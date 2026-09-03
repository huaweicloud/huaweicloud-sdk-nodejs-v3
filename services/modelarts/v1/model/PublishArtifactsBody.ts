import { ArtifactsPublish } from './ArtifactsPublish';


export class PublishArtifactsBody {
    private 'workspace_id'?: string;
    private 'publish_artifacts'?: Array<ArtifactsPublish>;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): PublishArtifactsBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPublishArtifacts(publishArtifacts: Array<ArtifactsPublish>): PublishArtifactsBody {
        this['publish_artifacts'] = publishArtifacts;
        return this;
    }
    public set publishArtifacts(publishArtifacts: Array<ArtifactsPublish>  | undefined) {
        this['publish_artifacts'] = publishArtifacts;
    }
    public get publishArtifacts(): Array<ArtifactsPublish> | undefined {
        return this['publish_artifacts'];
    }
}