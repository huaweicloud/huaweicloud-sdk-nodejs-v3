

export class DownloadImageFileRequest {
    private 'project_id'?: string;
    private 'image_uri'?: string;
    public constructor(projectId?: string, imageUri?: string) { 
        this['project_id'] = projectId;
        this['image_uri'] = imageUri;
    }
    public withProjectId(projectId: string): DownloadImageFileRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withImageUri(imageUri: string): DownloadImageFileRequest {
        this['image_uri'] = imageUri;
        return this;
    }
    public set imageUri(imageUri: string  | undefined) {
        this['image_uri'] = imageUri;
    }
    public get imageUri(): string | undefined {
        return this['image_uri'];
    }
}