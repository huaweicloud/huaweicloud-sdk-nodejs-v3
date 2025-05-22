import { CreateIterationRequestV4 } from './CreateIterationRequestV4';


export class CreateIterationV4Request {
    private 'project_id'?: string;
    public body?: CreateIterationRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateIterationV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateIterationRequestV4): CreateIterationV4Request {
        this['body'] = body;
        return this;
    }
}