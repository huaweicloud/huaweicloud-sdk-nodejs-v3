import { ModifyEmailAddressDto } from './ModifyEmailAddressDto';


export class SendUserEmailVerifyCodeRequest {
    public body?: ModifyEmailAddressDto;
    public constructor() { 
    }
    public withBody(body: ModifyEmailAddressDto): SendUserEmailVerifyCodeRequest {
        this['body'] = body;
        return this;
    }
}