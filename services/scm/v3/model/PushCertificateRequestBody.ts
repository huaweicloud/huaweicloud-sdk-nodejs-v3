

export class PushCertificateRequestBody {
    private 'target_project'?: string;
    private 'target_service'?: string;
    public constructor(targetProject?: string, targetService?: string) { 
        this['target_project'] = targetProject;
        this['target_service'] = targetService;
    }
    public withTargetProject(targetProject: string): PushCertificateRequestBody {
        this['target_project'] = targetProject;
        return this;
    }
    public set targetProject(targetProject: string  | undefined) {
        this['target_project'] = targetProject;
    }
    public get targetProject(): string | undefined {
        return this['target_project'];
    }
    public withTargetService(targetService: string): PushCertificateRequestBody {
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