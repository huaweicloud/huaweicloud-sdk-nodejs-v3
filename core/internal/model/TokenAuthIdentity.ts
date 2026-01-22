import { IdentityToken } from './IdentityToken';


export class TokenAuthIdentity {
    public methods?: Array<TokenAuthIdentityMethodsEnum> | Array<string>;
    public token?: IdentityToken;
    public policy?: any;
    public constructor(methods?: Array<string>) { 
        this.methods = methods;
    }
    public withMethods(methods: Array<TokenAuthIdentityMethodsEnum> | Array<string>): this {
        this.methods = methods;
        return this;
    }
    public withToken(token: IdentityToken): this {
        this.token = token;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TokenAuthIdentityMethodsEnum {
    TOKEN = 'token'
}
