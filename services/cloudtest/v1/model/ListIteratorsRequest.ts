import { IteratorVersionsQueryInfo } from './IteratorVersionsQueryInfo';


export class ListIteratorsRequest {
    public body?: IteratorVersionsQueryInfo;
    public constructor() { 
    }
    public withBody(body: IteratorVersionsQueryInfo): ListIteratorsRequest {
        this['body'] = body;
        return this;
    }
}