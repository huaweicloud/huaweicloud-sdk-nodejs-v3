import { UpdateParametersReqValues } from './UpdateParametersReqValues';


export class UpdateParametersReq {
    public values?: UpdateParametersReqValues;
    public constructor(values?: UpdateParametersReqValues) { 
        this['values'] = values;
    }
    public withValues(values: UpdateParametersReqValues): UpdateParametersReq {
        this['values'] = values;
        return this;
    }
}