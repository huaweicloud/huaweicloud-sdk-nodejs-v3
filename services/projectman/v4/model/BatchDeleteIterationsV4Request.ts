import { BatchDeleteIterationsV4RequestBody } from './BatchDeleteIterationsV4RequestBody';


export class BatchDeleteIterationsV4Request {
    private 'project_id'?: string;
    public body?: BatchDeleteIterationsV4RequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteIterationsV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteIterationsV4RequestBody): BatchDeleteIterationsV4Request {
        this['body'] = body;
        return this;
    }
}