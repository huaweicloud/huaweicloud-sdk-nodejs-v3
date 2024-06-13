import { RemediationExceptionRequest } from './RemediationExceptionRequest';


export class BatchDeleteRemediationExceptionsRequestBody {
    public exceptions?: Array<RemediationExceptionRequest>;
    public constructor(exceptions?: Array<RemediationExceptionRequest>) { 
        this['exceptions'] = exceptions;
    }
    public withExceptions(exceptions: Array<RemediationExceptionRequest>): BatchDeleteRemediationExceptionsRequestBody {
        this['exceptions'] = exceptions;
        return this;
    }
}