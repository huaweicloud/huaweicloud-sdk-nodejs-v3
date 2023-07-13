import { OsfederationGroups } from './OsfederationGroups';
import { OsfederationIdentityprovider } from './OsfederationIdentityprovider';
import { OsfederationProtocol } from './OsfederationProtocol';


export class TokenUserOsfederation {
    public groups: Array<OsfederationGroups>;
    private 'identity_provider': OsfederationIdentityprovider | undefined;
    public protocol: OsfederationProtocol;
    public constructor(groups?: any, identityProvider?: any, protocol?: any) { 
        this['groups'] = groups;
        this['identity_provider'] = identityProvider;
        this['protocol'] = protocol;
    }
    public withGroups(groups: Array<OsfederationGroups>): TokenUserOsfederation {
        this['groups'] = groups;
        return this;
    }
    public withIdentityProvider(identityProvider: OsfederationIdentityprovider): TokenUserOsfederation {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: OsfederationIdentityprovider | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider() {
        return this['identity_provider'];
    }
    public withProtocol(protocol: OsfederationProtocol): TokenUserOsfederation {
        this['protocol'] = protocol;
        return this;
    }
}