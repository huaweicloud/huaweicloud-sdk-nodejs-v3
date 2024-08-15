import { AuthorizableTicketBody } from './AuthorizableTicketBody';


export class ListAuthorizableTicketsReq {
    private 'request_params'?: Array<AuthorizableTicketBody>;
    public constructor() { 
    }
    public withRequestParams(requestParams: Array<AuthorizableTicketBody>): ListAuthorizableTicketsReq {
        this['request_params'] = requestParams;
        return this;
    }
    public set requestParams(requestParams: Array<AuthorizableTicketBody>  | undefined) {
        this['request_params'] = requestParams;
    }
    public get requestParams(): Array<AuthorizableTicketBody> | undefined {
        return this['request_params'];
    }
}