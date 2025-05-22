

export class CheckProjectNameRequestV4 {
    private 'project_name'?: string;
    public constructor(projectName?: string) { 
        this['project_name'] = projectName;
    }
    public withProjectName(projectName: string): CheckProjectNameRequestV4 {
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