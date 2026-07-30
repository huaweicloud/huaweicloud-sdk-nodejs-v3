import { ReqAssociatedResourceOpenStatus } from './ReqAssociatedResourceOpenStatus';


export class ChangeAssociatedResourceOpenStatusRequest {
    public body?: ReqAssociatedResourceOpenStatus;
    public constructor() { 
    }
    public withBody(body: ReqAssociatedResourceOpenStatus): ChangeAssociatedResourceOpenStatusRequest {
        this['body'] = body;
        return this;
    }
}