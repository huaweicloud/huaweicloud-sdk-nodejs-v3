import { UpdateUserInformationRequestBody } from './UpdateUserInformationRequestBody';


export class UpdateUserInformationRequest {
    private 'user_id'?: string;
    public body?: UpdateUserInformationRequestBody;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): UpdateUserInformationRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: UpdateUserInformationRequestBody): UpdateUserInformationRequest {
        this['body'] = body;
        return this;
    }
}