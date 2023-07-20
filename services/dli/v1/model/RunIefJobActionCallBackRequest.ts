import { IefFlinkJobMessagesReq } from './IefFlinkJobMessagesReq';


export class RunIefJobActionCallBackRequest {
    public body?: IefFlinkJobMessagesReq;
    public constructor() { 
    }
    public withBody(body: IefFlinkJobMessagesReq): RunIefJobActionCallBackRequest {
        this['body'] = body;
        return this;
    }
}