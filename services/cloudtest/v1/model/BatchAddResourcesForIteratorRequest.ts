import { AddResourceInfo } from './AddResourceInfo';


export class BatchAddResourcesForIteratorRequest {
    private 'iterator_id'?: string;
    public body?: AddResourceInfo;
    public constructor(iteratorId?: string) { 
        this['iterator_id'] = iteratorId;
    }
    public withIteratorId(iteratorId: string): BatchAddResourcesForIteratorRequest {
        this['iterator_id'] = iteratorId;
        return this;
    }
    public set iteratorId(iteratorId: string  | undefined) {
        this['iterator_id'] = iteratorId;
    }
    public get iteratorId(): string | undefined {
        return this['iterator_id'];
    }
    public withBody(body: AddResourceInfo): BatchAddResourcesForIteratorRequest {
        this['body'] = body;
        return this;
    }
}