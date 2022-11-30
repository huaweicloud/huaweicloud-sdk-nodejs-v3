import { CreatePoolOption } from './CreatePoolOption';


export class CreatePoolRequestBody {
    public pool: CreatePoolOption;
    public constructor(pool?: any) { 
        this['pool'] = pool;
    }
    public withPool(pool: CreatePoolOption): CreatePoolRequestBody {
        this['pool'] = pool;
        return this;
    }
}