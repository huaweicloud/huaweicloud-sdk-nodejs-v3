import { CreatePoolReq } from './CreatePoolReq';


export class CreatePoolRequestBody {
    public pool?: CreatePoolReq;
    public constructor(pool?: CreatePoolReq) { 
        this['pool'] = pool;
    }
    public withPool(pool: CreatePoolReq): CreatePoolRequestBody {
        this['pool'] = pool;
        return this;
    }
}