

export class CreateReleaseReqBodyValues {
    public imagePullPolicy?: string;
    public imageTag?: string;
    public constructor() { 
    }
    public withImagePullPolicy(imagePullPolicy: string): CreateReleaseReqBodyValues {
        this['imagePullPolicy'] = imagePullPolicy;
        return this;
    }
    public withImageTag(imageTag: string): CreateReleaseReqBodyValues {
        this['imageTag'] = imageTag;
        return this;
    }
}