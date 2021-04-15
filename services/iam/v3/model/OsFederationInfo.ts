import { IdpIdInfo } from './IdpIdInfo';
import { ProtocolIdInfo } from './ProtocolIdInfo';


export class OsFederationInfo {
    private 'identity_provider': IdpIdInfo | undefined;
    public protocol: ProtocolIdInfo;
    public groups: Array<object>;
    public constructor(identityProvider?: any, protocol?: any, groups?: any) { 
        this['identity_provider'] = identityProvider;
        this['protocol'] = protocol;
        this['groups'] = groups;
    }
    public withIdentityProvider(identityProvider: IdpIdInfo): OsFederationInfo {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: IdpIdInfo | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider() {
        return this['identity_provider'];
    }
    public withProtocol(protocol: ProtocolIdInfo): OsFederationInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withGroups(groups: Array<object>): OsFederationInfo {
        this['groups'] = groups;
        return this;
    }
}