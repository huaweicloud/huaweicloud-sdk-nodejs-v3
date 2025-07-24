import { CaseRemoveInfo } from './CaseRemoveInfo';


export class BatchRemoveTestCasesFromIteratorRequest {
    private 'iterator_id'?: string;
    public body?: CaseRemoveInfo;
    public constructor(iteratorId?: string) { 
        this['iterator_id'] = iteratorId;
    }
    public withIteratorId(iteratorId: string): BatchRemoveTestCasesFromIteratorRequest {
        this['iterator_id'] = iteratorId;
        return this;
    }
    public set iteratorId(iteratorId: string  | undefined) {
        this['iterator_id'] = iteratorId;
    }
    public get iteratorId(): string | undefined {
        return this['iterator_id'];
    }
    public withBody(body: CaseRemoveInfo): BatchRemoveTestCasesFromIteratorRequest {
        this['body'] = body;
        return this;
    }
}