import { GetIdTokenIdScopeBody } from './GetIdTokenIdScopeBody';
import { GetIdTokenIdTokenBody } from './GetIdTokenIdTokenBody';


export class GetIdTokenAuthParams {
    private 'id_token'?: GetIdTokenIdTokenBody;
    public scope?: GetIdTokenIdScopeBody;
    public constructor(idToken?: GetIdTokenIdTokenBody) { 
        this['id_token'] = idToken;
    }
    public withIdToken(idToken: GetIdTokenIdTokenBody): GetIdTokenAuthParams {
        this['id_token'] = idToken;
        return this;
    }
    public set idToken(idToken: GetIdTokenIdTokenBody  | undefined) {
        this['id_token'] = idToken;
    }
    public get idToken(): GetIdTokenIdTokenBody | undefined {
        return this['id_token'];
    }
    public withScope(scope: GetIdTokenIdScopeBody): GetIdTokenAuthParams {
        this['scope'] = scope;
        return this;
    }
}