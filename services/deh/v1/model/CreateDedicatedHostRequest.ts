import { ReqAllocateDeh } from './ReqAllocateDeh';


export class CreateDedicatedHostRequest {
    public body?: ReqAllocateDeh;
    public constructor() { 
    }
    public withBody(body: ReqAllocateDeh): CreateDedicatedHostRequest {
        this['body'] = body;
        return this;
    }
}