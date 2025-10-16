import { AuthObjectAuth } from './AuthObjectAuth';
import { AuthObjectScope } from './AuthObjectScope';


export class AuthObject {
    public auth?: AuthObjectAuth;
    public scope?: AuthObjectScope;
    public constructor() { 
    }
    public withAuth(auth: AuthObjectAuth): AuthObject {
        this['auth'] = auth;
        return this;
    }
    public withScope(scope: AuthObjectScope): AuthObject {
        this['scope'] = scope;
        return this;
    }
}