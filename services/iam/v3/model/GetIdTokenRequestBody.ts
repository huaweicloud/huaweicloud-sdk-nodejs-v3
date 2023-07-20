import { GetIdTokenAuthParams } from './GetIdTokenAuthParams';


export class GetIdTokenRequestBody {
    public auth?: GetIdTokenAuthParams;
    public constructor(auth?: GetIdTokenAuthParams) { 
        this['auth'] = auth;
    }
    public withAuth(auth: GetIdTokenAuthParams): GetIdTokenRequestBody {
        this['auth'] = auth;
        return this;
    }
}