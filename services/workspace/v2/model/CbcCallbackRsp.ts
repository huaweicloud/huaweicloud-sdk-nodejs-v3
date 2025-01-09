import { BaseError } from './BaseError';


export class CbcCallbackRsp {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public cbcJobId?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): CbcCallbackRsp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CbcCallbackRsp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCbcJobId(cbcJobId: string): CbcCallbackRsp {
        this['cbcJobId'] = cbcJobId;
        return this;
    }
    public withGetJobEndpoint(getJobEndpoint: string): CbcCallbackRsp {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): CbcCallbackRsp {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): CbcCallbackRsp {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): CbcCallbackRsp {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
}