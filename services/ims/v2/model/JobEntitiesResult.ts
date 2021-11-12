

export class JobEntitiesResult {
    private 'image_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    public status?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): JobEntitiesResult {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withProjectId(projectId: string): JobEntitiesResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStatus(status: string): JobEntitiesResult {
        this['status'] = status;
        return this;
    }
}