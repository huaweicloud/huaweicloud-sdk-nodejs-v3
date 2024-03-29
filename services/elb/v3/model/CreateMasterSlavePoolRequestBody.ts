import { CreateMasterSlavePoolOption } from './CreateMasterSlavePoolOption';


export class CreateMasterSlavePoolRequestBody {
    public pool?: CreateMasterSlavePoolOption;
    public constructor(pool?: CreateMasterSlavePoolOption) { 
        this['pool'] = pool;
    }
    public withPool(pool: CreateMasterSlavePoolOption): CreateMasterSlavePoolRequestBody {
        this['pool'] = pool;
        return this;
    }
}