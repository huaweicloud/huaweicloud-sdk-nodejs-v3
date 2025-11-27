import { ConnectEndpoint } from './ConnectEndpoint';


export class ClusterGroupSpec {
    public ruleNamespaces?: Array<string>;
    public federationId?: string;
    public description?: string;
    public dnsSuffix?: Array<string>;
    public federationExpirationTimestamp?: string;
    public policyId?: string;
    public federationVersion?: string;
    public connectGatewayEndpoints?: Array<ConnectEndpoint>;
    public constructor() { 
    }
    public withRuleNamespaces(ruleNamespaces: Array<string>): ClusterGroupSpec {
        this['ruleNamespaces'] = ruleNamespaces;
        return this;
    }
    public withFederationId(federationId: string): ClusterGroupSpec {
        this['federationId'] = federationId;
        return this;
    }
    public withDescription(description: string): ClusterGroupSpec {
        this['description'] = description;
        return this;
    }
    public withDnsSuffix(dnsSuffix: Array<string>): ClusterGroupSpec {
        this['dnsSuffix'] = dnsSuffix;
        return this;
    }
    public withFederationExpirationTimestamp(federationExpirationTimestamp: string): ClusterGroupSpec {
        this['federationExpirationTimestamp'] = federationExpirationTimestamp;
        return this;
    }
    public withPolicyId(policyId: string): ClusterGroupSpec {
        this['policyId'] = policyId;
        return this;
    }
    public withFederationVersion(federationVersion: string): ClusterGroupSpec {
        this['federationVersion'] = federationVersion;
        return this;
    }
    public withConnectGatewayEndpoints(connectGatewayEndpoints: Array<ConnectEndpoint>): ClusterGroupSpec {
        this['connectGatewayEndpoints'] = connectGatewayEndpoints;
        return this;
    }
}