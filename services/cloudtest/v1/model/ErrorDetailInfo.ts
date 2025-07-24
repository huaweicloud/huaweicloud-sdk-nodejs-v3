import { ErrorCaseInfoBean } from './ErrorCaseInfoBean';


export class ErrorDetailInfo {
    public failed?: Array<ErrorCaseInfoBean>;
    public constructor() { 
    }
    public withFailed(failed: Array<ErrorCaseInfoBean>): ErrorDetailInfo {
        this['failed'] = failed;
        return this;
    }
}