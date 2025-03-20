import { TokenDomainResult } from './TokenDomainResult';
import { TokenUserOsfederation } from './TokenUserOsfederation';


export class UnscopedTokenUser {
    public domain?: TokenDomainResult;
    public id?: string;
    public name?: string;
    private 'OS-FEDERATION'?: TokenUserOsfederation;
    public constructor(domain?: TokenDomainResult, id?: string, name?: string, osFederation?: TokenUserOsfederation) { 
        this['domain'] = domain;
        this['id'] = id;
        this['name'] = name;
        this['OS-FEDERATION'] = osFederation;
    }
    public withDomain(domain: TokenDomainResult): UnscopedTokenUser {
        this['domain'] = domain;
        return this;
    }
    public withId(id: string): UnscopedTokenUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UnscopedTokenUser {
        this['name'] = name;
        return this;
    }
    public withOsFederation(osFederation: TokenUserOsfederation): UnscopedTokenUser {
        this['OS-FEDERATION'] = osFederation;
        return this;
    }
    public set osFederation(osFederation: TokenUserOsfederation  | undefined) {
        this['OS-FEDERATION'] = osFederation;
    }
    public get osFederation(): TokenUserOsfederation | undefined {
        return this['OS-FEDERATION'];
    }
}