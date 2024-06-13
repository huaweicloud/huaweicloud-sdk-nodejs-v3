import { RemediationExceptionRequest } from './RemediationExceptionRequest';


export class BatchCreateRemediationExceptionsRequestBody {
    public exceptions?: Array<RemediationExceptionRequest>;
    public constructor(exceptions?: Array<RemediationExceptionRequest>) { 
        this['exceptions'] = exceptions;
    }
    public withExceptions(exceptions: Array<RemediationExceptionRequest>): BatchCreateRemediationExceptionsRequestBody {
        this['exceptions'] = exceptions;
        return this;
    }
}