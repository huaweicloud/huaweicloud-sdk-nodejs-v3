import { GetIdTokenIdScopeBody } from './GetIdTokenIdScopeBody';
import { GetIdTokenIdTokenBody } from './GetIdTokenIdTokenBody';


export class GetIdTokenAuthParams {
    private 'id_token': GetIdTokenIdTokenBody | undefined;
    public scope?: GetIdTokenIdScopeBody;
    public constructor(idToken?: any) { 
        this['id_token'] = idToken;
    }
    public withIdToken(idToken: GetIdTokenIdTokenBody): GetIdTokenAuthParams {
        this['id_token'] = idToken;
        return this;
    }
    public set idToken(idToken: GetIdTokenIdTokenBody | undefined) {
        this['id_token'] = idToken;
    }
    public get idToken() {
        return this['id_token'];
    }
    public withScope(scope: GetIdTokenIdScopeBody): GetIdTokenAuthParams {
        this['scope'] = scope;
        return this;
    }
}