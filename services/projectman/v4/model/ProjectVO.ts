

export class ProjectVO {
    public identifier?: string;
    public name?: string;
    public id?: number;
    private 'project_type'?: string;
    public constructor() { 
    }
    public withIdentifier(identifier: string): ProjectVO {
        this['identifier'] = identifier;
        return this;
    }
    public withName(name: string): ProjectVO {
        this['name'] = name;
        return this;
    }
    public withId(id: number): ProjectVO {
        this['id'] = id;
        return this;
    }
    public withProjectType(projectType: string): ProjectVO {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
}