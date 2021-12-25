

export class FGSDeploymentJobsParam {
    private 'file_id'?: string | undefined;
    public handler?: string;
    public constructor() { 
    }
    public withFileId(fileId: string): FGSDeploymentJobsParam {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
    public withHandler(handler: string): FGSDeploymentJobsParam {
        this['handler'] = handler;
        return this;
    }
}