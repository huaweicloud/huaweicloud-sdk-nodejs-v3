import { IteratorVersionsQueryInfo } from './IteratorVersionsQueryInfo';


export class ListIteratorsInfoRequest {
    public body?: IteratorVersionsQueryInfo;
    public constructor() { 
    }
    public withBody(body: IteratorVersionsQueryInfo): ListIteratorsInfoRequest {
        this['body'] = body;
        return this;
    }
}