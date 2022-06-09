import { UpdatePoolReq } from './UpdatePoolReq';


export class UpdatePoolRequestBody {
    public pool: UpdatePoolReq;
    public constructor(pool?: any) { 
        this['pool'] = pool;
    }
    public withPool(pool: UpdatePoolReq): UpdatePoolRequestBody {
        this['pool'] = pool;
        return this;
    }
}