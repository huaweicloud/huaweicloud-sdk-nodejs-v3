import { BatchAddServerNicOption } from './BatchAddServerNicOption';


export class BatchAddServerNicsRequestBody {
    public nics: Array<BatchAddServerNicOption>;
    public constructor(nics?: any) { 
        this['nics'] = nics;
    }
    public withNics(nics: Array<BatchAddServerNicOption>): BatchAddServerNicsRequestBody {
        this['nics'] = nics;
        return this;
    }
}