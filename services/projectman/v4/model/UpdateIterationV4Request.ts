import { UpdateIterationRequestV4 } from './UpdateIterationRequestV4';


export class UpdateIterationV4Request {
    private 'project_id'?: string;
    private 'iteration_id'?: number;
    public body?: UpdateIterationRequestV4;
    public constructor(projectId?: string, iterationId?: number) { 
        this['project_id'] = projectId;
        this['iteration_id'] = iterationId;
    }
    public withProjectId(projectId: string): UpdateIterationV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIterationId(iterationId: number): UpdateIterationV4Request {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withBody(body: UpdateIterationRequestV4): UpdateIterationV4Request {
        this['body'] = body;
        return this;
    }
}