import { UpdateLogtankOption } from './UpdateLogtankOption';


export class UpdateLogtankRequestBody {
    public logtank: UpdateLogtankOption;
    public constructor(logtank?: any) { 
        this['logtank'] = logtank;
    }
    public withLogtank(logtank: UpdateLogtankOption): UpdateLogtankRequestBody {
        this['logtank'] = logtank;
        return this;
    }
}