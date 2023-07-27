import { OsStartBody } from './OsStartBody';


export class BatchStartBaremetalServersRequest {
    public body?: OsStartBody;
    public constructor() { 
    }
    public withBody(body: OsStartBody): BatchStartBaremetalServersRequest {
        this['body'] = body;
        return this;
    }
}