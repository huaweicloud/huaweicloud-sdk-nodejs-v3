import { ListTableApproversRequestBody } from './ListTableApproversRequestBody';


export class ListSecurityTableApproversRequest {
    public body?: ListTableApproversRequestBody;
    public constructor() { 
    }
    public withBody(body: ListTableApproversRequestBody): ListSecurityTableApproversRequest {
        this['body'] = body;
        return this;
    }
}