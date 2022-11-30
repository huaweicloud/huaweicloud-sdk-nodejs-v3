

export class CciDeploymentJobsParam {
    public image?: string;
    public constructor() { 
    }
    public withImage(image: string): CciDeploymentJobsParam {
        this['image'] = image;
        return this;
    }
}