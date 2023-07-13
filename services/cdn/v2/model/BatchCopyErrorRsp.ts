import { BatchCopyErrorRspError } from './BatchCopyErrorRspError';


export class BatchCopyErrorRsp {
    public error?: BatchCopyErrorRspError;
    public constructor() { 
    }
    public withError(error: BatchCopyErrorRspError): BatchCopyErrorRsp {
        this['error'] = error;
        return this;
    }
}