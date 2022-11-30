import { BatchDeleteServerNicOption } from './BatchDeleteServerNicOption';


export class BatchDeleteServerNicsRequestBody {
    public nics: Array<BatchDeleteServerNicOption>;
    public constructor(nics?: any) { 
        this['nics'] = nics;
    }
    public withNics(nics: Array<BatchDeleteServerNicOption>): BatchDeleteServerNicsRequestBody {
        this['nics'] = nics;
        return this;
    }
}