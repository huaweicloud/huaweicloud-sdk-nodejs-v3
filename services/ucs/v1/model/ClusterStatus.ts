import { APIEnablement } from './APIEnablement';
import { ConditionStatus } from './ConditionStatus';
import { NodeSummary } from './NodeSummary';
import { ResourceSummary } from './ResourceSummary';


export class ClusterStatus {
    public kubernetesVersion?: string;
    public conditions?: Array<ConditionStatus>;
    public nodeSummary?: NodeSummary;
    public resourceSummary?: ResourceSummary;
    public endpoints?: object;
    public phase?: string;
    public reason?: string;
    public message?: string;
    public arrearFreeze?: string;
    public policeFreeze?: string;
    public apiEnablements?: Array<APIEnablement>;
    public constructor() { 
    }
    public withKubernetesVersion(kubernetesVersion: string): ClusterStatus {
        this['kubernetesVersion'] = kubernetesVersion;
        return this;
    }
    public withConditions(conditions: Array<ConditionStatus>): ClusterStatus {
        this['conditions'] = conditions;
        return this;
    }
    public withNodeSummary(nodeSummary: NodeSummary): ClusterStatus {
        this['nodeSummary'] = nodeSummary;
        return this;
    }
    public withResourceSummary(resourceSummary: ResourceSummary): ClusterStatus {
        this['resourceSummary'] = resourceSummary;
        return this;
    }
    public withEndpoints(endpoints: object): ClusterStatus {
        this['endpoints'] = endpoints;
        return this;
    }
    public withPhase(phase: string): ClusterStatus {
        this['phase'] = phase;
        return this;
    }
    public withReason(reason: string): ClusterStatus {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): ClusterStatus {
        this['message'] = message;
        return this;
    }
    public withArrearFreeze(arrearFreeze: string): ClusterStatus {
        this['arrearFreeze'] = arrearFreeze;
        return this;
    }
    public withPoliceFreeze(policeFreeze: string): ClusterStatus {
        this['policeFreeze'] = policeFreeze;
        return this;
    }
    public withApiEnablements(apiEnablements: Array<APIEnablement>): ClusterStatus {
        this['apiEnablements'] = apiEnablements;
        return this;
    }
}