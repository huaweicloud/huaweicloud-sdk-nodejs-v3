import { UpdatePoolOption } from './UpdatePoolOption';


export class UpdatePoolRequestBody {
    public pool?: UpdatePoolOption;
    public constructor(pool?: UpdatePoolOption) { 
        this['pool'] = pool;
    }
    public withPool(pool: UpdatePoolOption): UpdatePoolRequestBody {
        this['pool'] = pool;
        return this;
    }
}