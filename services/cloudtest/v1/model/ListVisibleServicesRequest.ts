

export class ListVisibleServicesRequest {
    private 'project_uuid'?: string;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withProjectUuid(projectUuid: string): ListVisibleServicesRequest {
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