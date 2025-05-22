

export class DeleteIterationV4Request {
    private 'project_id'?: string;
    private 'iteration_id'?: number;
    public constructor(projectId?: string, iterationId?: number) { 
        this['project_id'] = projectId;
        this['iteration_id'] = iterationId;
    }
    public withProjectId(projectId: string): DeleteIterationV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIterationId(iterationId: number): DeleteIterationV4Request {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
}