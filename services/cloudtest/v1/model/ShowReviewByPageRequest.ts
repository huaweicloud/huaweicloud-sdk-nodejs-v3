import { CommRequestReviewPageParam } from './CommRequestReviewPageParam';


export class ShowReviewByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestReviewPageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowReviewByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestReviewPageParam): ShowReviewByPageRequest {
        this['body'] = body;
        return this;
    }
}