

export class ShowUserAccessInfoRequest {
    private 'project_uuid'?: string;
    public constructor() { 
    }
    public withProjectUuid(projectUuid: string): ShowUserAccessInfoRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}