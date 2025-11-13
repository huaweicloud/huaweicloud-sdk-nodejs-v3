import { ValidateConnectionUserInfo } from './ValidateConnectionUserInfo';


export class ValidateInstanceConnectionRequestBody {
    private 'target_instance_id'?: string;
    private 'user_info'?: ValidateConnectionUserInfo;
    public constructor() { 
    }
    public withTargetInstanceId(targetInstanceId: string): ValidateInstanceConnectionRequestBody {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withUserInfo(userInfo: ValidateConnectionUserInfo): ValidateInstanceConnectionRequestBody {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: ValidateConnectionUserInfo  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): ValidateConnectionUserInfo | undefined {
        return this['user_info'];
    }
}