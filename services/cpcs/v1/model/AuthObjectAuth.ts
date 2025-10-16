import { AuthObjectAuthAccessKey } from './AuthObjectAuthAccessKey';


export class AuthObjectAuth {
    public accessKey?: AuthObjectAuthAccessKey;
    public constructor() { 
    }
    public withAccessKey(accessKey: AuthObjectAuthAccessKey): AuthObjectAuth {
        this['accessKey'] = accessKey;
        return this;
    }
}