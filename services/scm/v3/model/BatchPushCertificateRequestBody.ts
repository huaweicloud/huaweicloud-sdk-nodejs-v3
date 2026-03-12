

export class BatchPushCertificateRequestBody {
    private 'target_projects'?: Array<string>;
    private 'target_service'?: string;
    public constructor(targetProjects?: Array<string>, targetService?: string) { 
        this['target_projects'] = targetProjects;
        this['target_service'] = targetService;
    }
    public withTargetProjects(targetProjects: Array<string>): BatchPushCertificateRequestBody {
        this['target_projects'] = targetProjects;
        return this;
    }
    public set targetProjects(targetProjects: Array<string>  | undefined) {
        this['target_projects'] = targetProjects;
    }
    public get targetProjects(): Array<string> | undefined {
        return this['target_projects'];
    }
    public withTargetService(targetService: string): BatchPushCertificateRequestBody {
        this['target_service'] = targetService;
        return this;
    }
    public set targetService(targetService: string  | undefined) {
        this['target_service'] = targetService;
    }
    public get targetService(): string | undefined {
        return this['target_service'];
    }
}