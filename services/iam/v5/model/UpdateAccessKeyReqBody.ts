import { AccessKeyStatus } from './AccessKeyStatus';


export class UpdateAccessKeyReqBody {
    public status?: AccessKeyStatus;
    public constructor(status?: AccessKeyStatus) { 
        this['status'] = status;
    }
    public withStatus(status: AccessKeyStatus): UpdateAccessKeyReqBody {
        this['status'] = status;
        return this;
    }
}