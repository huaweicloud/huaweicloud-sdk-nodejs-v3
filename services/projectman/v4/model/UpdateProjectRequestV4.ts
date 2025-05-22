

export class UpdateProjectRequestV4 {
    public description?: string;
    private 'project_name'?: string;
    public constructor(projectName?: string) { 
        this['project_name'] = projectName;
    }
    public withDescription(description: string): UpdateProjectRequestV4 {
        this['description'] = description;
        return this;
    }
    public withProjectName(projectName: string): UpdateProjectRequestV4 {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}