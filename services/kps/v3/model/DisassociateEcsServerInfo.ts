import { Auth } from './Auth';


export class DisassociateEcsServerInfo {
    public id: string;
    public auth?: Auth;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): DisassociateEcsServerInfo {
        this['id'] = id;
        return this;
    }
    public withAuth(auth: Auth): DisassociateEcsServerInfo {
        this['auth'] = auth;
        return this;
    }
}