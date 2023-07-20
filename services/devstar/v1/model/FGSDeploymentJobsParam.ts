

export class FGSDeploymentJobsParam {
    private 'file_id'?: string;
    public handler?: string;
    public constructor() { 
    }
    public withFileId(fileId: string): FGSDeploymentJobsParam {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withHandler(handler: string): FGSDeploymentJobsParam {
        this['handler'] = handler;
        return this;
    }
}