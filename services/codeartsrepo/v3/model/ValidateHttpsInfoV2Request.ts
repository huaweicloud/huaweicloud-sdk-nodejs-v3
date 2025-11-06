import { PasswordRequest } from './PasswordRequest';


export class ValidateHttpsInfoV2Request {
    private 'iam_user_uuid'?: string;
    public body?: PasswordRequest;
    public constructor(iamUserUuid?: string) { 
        this['iam_user_uuid'] = iamUserUuid;
    }
    public withIamUserUuid(iamUserUuid: string): ValidateHttpsInfoV2Request {
        this['iam_user_uuid'] = iamUserUuid;
        return this;
    }
    public set iamUserUuid(iamUserUuid: string  | undefined) {
        this['iam_user_uuid'] = iamUserUuid;
    }
    public get iamUserUuid(): string | undefined {
        return this['iam_user_uuid'];
    }
    public withBody(body: PasswordRequest): ValidateHttpsInfoV2Request {
        this['body'] = body;
        return this;
    }
}