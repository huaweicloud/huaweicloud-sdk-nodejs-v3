import { OsStopBody } from './OsStopBody';


export class BatchStopBaremetalServersRequest {
    public body?: OsStopBody;
    public constructor() { 
    }
    public withBody(body: OsStopBody): BatchStopBaremetalServersRequest {
        this['body'] = body;
        return this;
    }
}