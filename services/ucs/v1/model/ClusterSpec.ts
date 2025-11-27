import { ConnectEndpoint } from './ConnectEndpoint';
import { LocalSecretReference } from './LocalSecretReference';
import { RuleNamespace } from './RuleNamespace';
import { Taint } from './Taint';


export class ClusterSpec {
    public syncMode?: string;
    public clusterGroupID?: string;
    public manageType?: string;
    public ruleNamespaces?: Array<RuleNamespace>;
    public apiEndpoint?: string;
    public secretRef?: LocalSecretReference;
    public insecureSkipTLSVerification?: boolean;
    public proxyURL?: string;
    public provider?: string;
    public type?: string;
    public category?: string;
    public enableDistMgt?: boolean;
    public region?: string;
    public country?: string;
    public city?: string;
    public projectID?: string;
    public projectName?: string;
    public zone?: string;
    public taints?: Array<Taint>;
    private 'IsDownloadedCert'?: boolean;
    public policyId?: string;
    public operatorNamespace?: string;
    public connectProxyEndpoints?: Array<ConnectEndpoint>;
    public constructor() { 
    }
    public withSyncMode(syncMode: string): ClusterSpec {
        this['syncMode'] = syncMode;
        return this;
    }
    public withClusterGroupID(clusterGroupID: string): ClusterSpec {
        this['clusterGroupID'] = clusterGroupID;
        return this;
    }
    public withManageType(manageType: string): ClusterSpec {
        this['manageType'] = manageType;
        return this;
    }
    public withRuleNamespaces(ruleNamespaces: Array<RuleNamespace>): ClusterSpec {
        this['ruleNamespaces'] = ruleNamespaces;
        return this;
    }
    public withApiEndpoint(apiEndpoint: string): ClusterSpec {
        this['apiEndpoint'] = apiEndpoint;
        return this;
    }
    public withSecretRef(secretRef: LocalSecretReference): ClusterSpec {
        this['secretRef'] = secretRef;
        return this;
    }
    public withInsecureSkipTLSVerification(insecureSkipTLSVerification: boolean): ClusterSpec {
        this['insecureSkipTLSVerification'] = insecureSkipTLSVerification;
        return this;
    }
    public withProxyURL(proxyURL: string): ClusterSpec {
        this['proxyURL'] = proxyURL;
        return this;
    }
    public withProvider(provider: string): ClusterSpec {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ClusterSpec {
        this['type'] = type;
        return this;
    }
    public withCategory(category: string): ClusterSpec {
        this['category'] = category;
        return this;
    }
    public withEnableDistMgt(enableDistMgt: boolean): ClusterSpec {
        this['enableDistMgt'] = enableDistMgt;
        return this;
    }
    public withRegion(region: string): ClusterSpec {
        this['region'] = region;
        return this;
    }
    public withCountry(country: string): ClusterSpec {
        this['country'] = country;
        return this;
    }
    public withCity(city: string): ClusterSpec {
        this['city'] = city;
        return this;
    }
    public withProjectID(projectID: string): ClusterSpec {
        this['projectID'] = projectID;
        return this;
    }
    public withProjectName(projectName: string): ClusterSpec {
        this['projectName'] = projectName;
        return this;
    }
    public withZone(zone: string): ClusterSpec {
        this['zone'] = zone;
        return this;
    }
    public withTaints(taints: Array<Taint>): ClusterSpec {
        this['taints'] = taints;
        return this;
    }
    public withIsDownloadedCert(isDownloadedCert: boolean): ClusterSpec {
        this['IsDownloadedCert'] = isDownloadedCert;
        return this;
    }
    public set isDownloadedCert(isDownloadedCert: boolean  | undefined) {
        this['IsDownloadedCert'] = isDownloadedCert;
    }
    public get isDownloadedCert(): boolean | undefined {
        return this['IsDownloadedCert'];
    }
    public withPolicyId(policyId: string): ClusterSpec {
        this['policyId'] = policyId;
        return this;
    }
    public withOperatorNamespace(operatorNamespace: string): ClusterSpec {
        this['operatorNamespace'] = operatorNamespace;
        return this;
    }
    public withConnectProxyEndpoints(connectProxyEndpoints: Array<ConnectEndpoint>): ClusterSpec {
        this['connectProxyEndpoints'] = connectProxyEndpoints;
        return this;
    }
}