import { RebootBody } from './RebootBody';


export class BatchRebootBaremetalServersRequest {
    public body?: RebootBody;
    public constructor() { 
    }
    public withBody(body: RebootBody): BatchRebootBaremetalServersRequest {
        this['body'] = body;
        return this;
    }
}