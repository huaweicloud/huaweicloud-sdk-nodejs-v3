import { CancelShareNewRequestBody } from './CancelShareNewRequestBody';


export class CancelShareNewRequest {
    public body?: CancelShareNewRequestBody;
    public constructor() { 
    }
    public withBody(body: CancelShareNewRequestBody): CancelShareNewRequest {
        this['body'] = body;
        return this;
    }
}