import { Toleration } from './Toleration';


export class PodSpec {
    public volumes?: Array<object>;
    public containers?: Array<object>;
    public restartPolicy?: string;
    public terminationGracePeriodSeconds?: number;
    public activeDeadlineSeconds?: number;
    public dnsPolicy?: string;
    public nodeSelector?: { [key: string]: string; };
    public serviceAccountName?: string;
    public serviceAccount?: string;
    public automountServiceAccountToken?: boolean;
    public nodeName?: string;
    public securityContext?: object;
    public schedulerName?: string;
    public tolerations?: Array<Toleration>;
    public priority?: number;
    public enableServiceLinks?: boolean;
    public preemptionPolicy?: string;
    public constructor() { 
    }
    public withVolumes(volumes: Array<object>): PodSpec {
        this['volumes'] = volumes;
        return this;
    }
    public withContainers(containers: Array<object>): PodSpec {
        this['containers'] = containers;
        return this;
    }
    public withRestartPolicy(restartPolicy: string): PodSpec {
        this['restartPolicy'] = restartPolicy;
        return this;
    }
    public withTerminationGracePeriodSeconds(terminationGracePeriodSeconds: number): PodSpec {
        this['terminationGracePeriodSeconds'] = terminationGracePeriodSeconds;
        return this;
    }
    public withActiveDeadlineSeconds(activeDeadlineSeconds: number): PodSpec {
        this['activeDeadlineSeconds'] = activeDeadlineSeconds;
        return this;
    }
    public withDnsPolicy(dnsPolicy: string): PodSpec {
        this['dnsPolicy'] = dnsPolicy;
        return this;
    }
    public withNodeSelector(nodeSelector: { [key: string]: string; }): PodSpec {
        this['nodeSelector'] = nodeSelector;
        return this;
    }
    public withServiceAccountName(serviceAccountName: string): PodSpec {
        this['serviceAccountName'] = serviceAccountName;
        return this;
    }
    public withServiceAccount(serviceAccount: string): PodSpec {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withAutomountServiceAccountToken(automountServiceAccountToken: boolean): PodSpec {
        this['automountServiceAccountToken'] = automountServiceAccountToken;
        return this;
    }
    public withNodeName(nodeName: string): PodSpec {
        this['nodeName'] = nodeName;
        return this;
    }
    public withSecurityContext(securityContext: object): PodSpec {
        this['securityContext'] = securityContext;
        return this;
    }
    public withSchedulerName(schedulerName: string): PodSpec {
        this['schedulerName'] = schedulerName;
        return this;
    }
    public withTolerations(tolerations: Array<Toleration>): PodSpec {
        this['tolerations'] = tolerations;
        return this;
    }
    public withPriority(priority: number): PodSpec {
        this['priority'] = priority;
        return this;
    }
    public withEnableServiceLinks(enableServiceLinks: boolean): PodSpec {
        this['enableServiceLinks'] = enableServiceLinks;
        return this;
    }
    public withPreemptionPolicy(preemptionPolicy: string): PodSpec {
        this['preemptionPolicy'] = preemptionPolicy;
        return this;
    }
}