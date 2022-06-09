import { CreateLogtankOption } from './CreateLogtankOption';


export class CreateLogtankRequestBody {
    public logtank: CreateLogtankOption;
    public constructor(logtank?: any) { 
        this['logtank'] = logtank;
    }
    public withLogtank(logtank: CreateLogtankOption): CreateLogtankRequestBody {
        this['logtank'] = logtank;
        return this;
    }
}