import { LeaseReq } from './LeaseReq';


export class RenewLeaseRequest {
    public duration?: number;
    public id?: string;
    public body?: LeaseReq;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withDuration(duration: number): RenewLeaseRequest {
        this['duration'] = duration;
        return this;
    }
    public withId(id: string): RenewLeaseRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: LeaseReq): RenewLeaseRequest {
        this['body'] = body;
        return this;
    }
}