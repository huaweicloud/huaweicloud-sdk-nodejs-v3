import { AddRelationsInfo } from './AddRelationsInfo';


export class BatchAddRelationsByOneCaseRequest {
    private 'workitem_id'?: string;
    public body?: AddRelationsInfo;
    public constructor(workitemId?: string) { 
        this['workitem_id'] = workitemId;
    }
    public withWorkitemId(workitemId: string): BatchAddRelationsByOneCaseRequest {
        this['workitem_id'] = workitemId;
        return this;
    }
    public set workitemId(workitemId: string  | undefined) {
        this['workitem_id'] = workitemId;
    }
    public get workitemId(): string | undefined {
        return this['workitem_id'];
    }
    public withBody(body: AddRelationsInfo): BatchAddRelationsByOneCaseRequest {
        this['body'] = body;
        return this;
    }
}