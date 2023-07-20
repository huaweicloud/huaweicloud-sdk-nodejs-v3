import { BatchAttachSharebwDict } from './BatchAttachSharebwDict';


export class BatchAttachSharebwReq {
    public publicips?: Array<BatchAttachSharebwDict>;
    public constructor() { 
    }
    public withPublicips(publicips: Array<BatchAttachSharebwDict>): BatchAttachSharebwReq {
        this['publicips'] = publicips;
        return this;
    }
}