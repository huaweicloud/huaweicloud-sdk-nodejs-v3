import { WorkloadNodeVO } from './WorkloadNodeVO';
import { WorkloadResourceRequirement } from './WorkloadResourceRequirement';


export class Workload {
    public apiVersion?: string;
    public kind?: string;
    public type?: string;
    public namespace?: string;
    public name?: string;
    public jobName?: string;
    public uid?: string;
    public jobUUID?: string;
    public flavor?: string;
    public status?: string;
    public resourceRequirement?: WorkloadResourceRequirement;
    public priority?: string;
    public runningDuration?: number;
    public pendingDuration?: number;
    public pendingPosition?: number;
    public createTime?: number;
    public gvk?: string;
    public hostIps?: string;
    public nodes?: Array<WorkloadNodeVO>;
    public constructor(apiVersion?: string, kind?: string, type?: string, namespace?: string, name?: string) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['type'] = type;
        this['namespace'] = namespace;
        this['name'] = name;
    }
    public withApiVersion(apiVersion: string): Workload {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): Workload {
        this['kind'] = kind;
        return this;
    }
    public withType(type: string): Workload {
        this['type'] = type;
        return this;
    }
    public withNamespace(namespace: string): Workload {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): Workload {
        this['name'] = name;
        return this;
    }
    public withJobName(jobName: string): Workload {
        this['jobName'] = jobName;
        return this;
    }
    public withUid(uid: string): Workload {
        this['uid'] = uid;
        return this;
    }
    public withJobUUID(jobUUID: string): Workload {
        this['jobUUID'] = jobUUID;
        return this;
    }
    public withFlavor(flavor: string): Workload {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: string): Workload {
        this['status'] = status;
        return this;
    }
    public withResourceRequirement(resourceRequirement: WorkloadResourceRequirement): Workload {
        this['resourceRequirement'] = resourceRequirement;
        return this;
    }
    public withPriority(priority: string): Workload {
        this['priority'] = priority;
        return this;
    }
    public withRunningDuration(runningDuration: number): Workload {
        this['runningDuration'] = runningDuration;
        return this;
    }
    public withPendingDuration(pendingDuration: number): Workload {
        this['pendingDuration'] = pendingDuration;
        return this;
    }
    public withPendingPosition(pendingPosition: number): Workload {
        this['pendingPosition'] = pendingPosition;
        return this;
    }
    public withCreateTime(createTime: number): Workload {
        this['createTime'] = createTime;
        return this;
    }
    public withGvk(gvk: string): Workload {
        this['gvk'] = gvk;
        return this;
    }
    public withHostIps(hostIps: string): Workload {
        this['hostIps'] = hostIps;
        return this;
    }
    public withNodes(nodes: Array<WorkloadNodeVO>): Workload {
        this['nodes'] = nodes;
        return this;
    }
}