

export class IDERepoSearchDO {
    private 'artifact_name'?: string;
    private 'artifact_type'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'project_id'?: string;
    private 'in_project'?: boolean;
    public constructor(artifactName?: string) { 
        this['artifact_name'] = artifactName;
    }
    public withArtifactName(artifactName: string): IDERepoSearchDO {
        this['artifact_name'] = artifactName;
        return this;
    }
    public set artifactName(artifactName: string  | undefined) {
        this['artifact_name'] = artifactName;
    }
    public get artifactName(): string | undefined {
        return this['artifact_name'];
    }
    public withArtifactType(artifactType: string): IDERepoSearchDO {
        this['artifact_type'] = artifactType;
        return this;
    }
    public set artifactType(artifactType: string  | undefined) {
        this['artifact_type'] = artifactType;
    }
    public get artifactType(): string | undefined {
        return this['artifact_type'];
    }
    public withPageNo(pageNo: number): IDERepoSearchDO {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): IDERepoSearchDO {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withProjectId(projectId: string): IDERepoSearchDO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInProject(inProject: boolean): IDERepoSearchDO {
        this['in_project'] = inProject;
        return this;
    }
    public set inProject(inProject: boolean  | undefined) {
        this['in_project'] = inProject;
    }
    public get inProject(): boolean | undefined {
        return this['in_project'];
    }
}