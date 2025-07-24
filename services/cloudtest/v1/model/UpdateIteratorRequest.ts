import { IteratorVersionInfo } from './IteratorVersionInfo';


export class UpdateIteratorRequest {
    private 'iterator_id'?: string;
    public body?: IteratorVersionInfo;
    public constructor(iteratorId?: string) { 
        this['iterator_id'] = iteratorId;
    }
    public withIteratorId(iteratorId: string): UpdateIteratorRequest {
        this['iterator_id'] = iteratorId;
        return this;
    }
    public set iteratorId(iteratorId: string  | undefined) {
        this['iterator_id'] = iteratorId;
    }
    public get iteratorId(): string | undefined {
        return this['iterator_id'];
    }
    public withBody(body: IteratorVersionInfo): UpdateIteratorRequest {
        this['body'] = body;
        return this;
    }
}