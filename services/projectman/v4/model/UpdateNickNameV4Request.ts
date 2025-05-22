import { UpdateUserNickNameRequestV4 } from './UpdateUserNickNameRequestV4';


export class UpdateNickNameV4Request {
    public body?: UpdateUserNickNameRequestV4;
    public constructor() { 
    }
    public withBody(body: UpdateUserNickNameRequestV4): UpdateNickNameV4Request {
        this['body'] = body;
        return this;
    }
}