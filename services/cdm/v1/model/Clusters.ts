import { ActionProgress } from './ActionProgress';
import { ClusterDetailInstance } from './ClusterDetailInstance';
import { ClusterTask } from './ClusterTask';
import { CustomerConfig } from './CustomerConfig';
import { Datastore } from './Datastore';
import { FailedReasons } from './FailedReasons';


export class Clusters {
    public customerConfig?: CustomerConfig;
    public datastore?: Datastore;
    public instances?: Array<ClusterDetailInstance>;
    public azName?: string;
    public dbuser?: string;
    public flavorName?: string;
    public recentEvent?: number;
    public isAutoOff?: boolean;
    public isScheduleBootOff?: boolean;
    public clusterMode?: string;
    public namespace?: string;
    public task?: ClusterTask;
    public publicEndpoint?: string;
    public actionProgress?: ActionProgress;
    public created?: string;
    public bakExpectedStartTime?: string;
    public bakKeepDay?: number;
    public name?: string;
    public statusDetail?: string;
    public id?: string;
    public isFrozen?: string;
    public updated?: string;
    public status?: string;
    public failedReasons?: FailedReasons;
    public constructor(created?: string, name?: string, id?: string, isFrozen?: string, updated?: string, status?: string) { 
        this['created'] = created;
        this['name'] = name;
        this['id'] = id;
        this['isFrozen'] = isFrozen;
        this['updated'] = updated;
        this['status'] = status;
    }
    public withCustomerConfig(customerConfig: CustomerConfig): Clusters {
        this['customerConfig'] = customerConfig;
        return this;
    }
    public withDatastore(datastore: Datastore): Clusters {
        this['datastore'] = datastore;
        return this;
    }
    public withInstances(instances: Array<ClusterDetailInstance>): Clusters {
        this['instances'] = instances;
        return this;
    }
    public withAzName(azName: string): Clusters {
        this['azName'] = azName;
        return this;
    }
    public withDbuser(dbuser: string): Clusters {
        this['dbuser'] = dbuser;
        return this;
    }
    public withFlavorName(flavorName: string): Clusters {
        this['flavorName'] = flavorName;
        return this;
    }
    public withRecentEvent(recentEvent: number): Clusters {
        this['recentEvent'] = recentEvent;
        return this;
    }
    public withIsAutoOff(isAutoOff: boolean): Clusters {
        this['isAutoOff'] = isAutoOff;
        return this;
    }
    public withIsScheduleBootOff(isScheduleBootOff: boolean): Clusters {
        this['isScheduleBootOff'] = isScheduleBootOff;
        return this;
    }
    public withClusterMode(clusterMode: string): Clusters {
        this['clusterMode'] = clusterMode;
        return this;
    }
    public withNamespace(namespace: string): Clusters {
        this['namespace'] = namespace;
        return this;
    }
    public withTask(task: ClusterTask): Clusters {
        this['task'] = task;
        return this;
    }
    public withPublicEndpoint(publicEndpoint: string): Clusters {
        this['publicEndpoint'] = publicEndpoint;
        return this;
    }
    public withActionProgress(actionProgress: ActionProgress): Clusters {
        this['actionProgress'] = actionProgress;
        return this;
    }
    public withCreated(created: string): Clusters {
        this['created'] = created;
        return this;
    }
    public withBakExpectedStartTime(bakExpectedStartTime: string): Clusters {
        this['bakExpectedStartTime'] = bakExpectedStartTime;
        return this;
    }
    public withBakKeepDay(bakKeepDay: number): Clusters {
        this['bakKeepDay'] = bakKeepDay;
        return this;
    }
    public withName(name: string): Clusters {
        this['name'] = name;
        return this;
    }
    public withStatusDetail(statusDetail: string): Clusters {
        this['statusDetail'] = statusDetail;
        return this;
    }
    public withId(id: string): Clusters {
        this['id'] = id;
        return this;
    }
    public withIsFrozen(isFrozen: string): Clusters {
        this['isFrozen'] = isFrozen;
        return this;
    }
    public withUpdated(updated: string): Clusters {
        this['updated'] = updated;
        return this;
    }
    public withStatus(status: string): Clusters {
        this['status'] = status;
        return this;
    }
    public withFailedReasons(failedReasons: FailedReasons): Clusters {
        this['failedReasons'] = failedReasons;
        return this;
    }
}