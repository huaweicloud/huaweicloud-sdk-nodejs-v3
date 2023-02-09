import { ErrMsg } from './ErrMsg';


export class ErrRsp {
    public error: ErrMsg;
    public constructor(error?: any) { 
        this['error'] = error;
    }
    public withError(error: ErrMsg): ErrRsp {
        this['error'] = error;
        return this;
    }
}