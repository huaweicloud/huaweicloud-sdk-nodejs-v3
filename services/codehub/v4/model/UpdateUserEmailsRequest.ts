import { ModifyEmailAddressDto } from './ModifyEmailAddressDto';


export class UpdateUserEmailsRequest {
    public body?: ModifyEmailAddressDto;
    public constructor() { 
    }
    public withBody(body: ModifyEmailAddressDto): UpdateUserEmailsRequest {
        this['body'] = body;
        return this;
    }
}