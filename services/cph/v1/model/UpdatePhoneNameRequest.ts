import { UpdatePhoneNameRequestBody } from './UpdatePhoneNameRequestBody';


export class UpdatePhoneNameRequest {
    private 'phone_id'?: string;
    public body?: UpdatePhoneNameRequestBody;
    public constructor(phoneId?: string) { 
        this['phone_id'] = phoneId;
    }
    public withPhoneId(phoneId: string): UpdatePhoneNameRequest {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withBody(body: UpdatePhoneNameRequestBody): UpdatePhoneNameRequest {
        this['body'] = body;
        return this;
    }
}