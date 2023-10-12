import { ClusterVolumeRsp } from './ClusterVolumeRsp';


export class ClusterListInstances {
    public status?: string;
    public type?: string;
    public id?: string;
    public name?: string;
    public specCode?: string;
    public azCode?: string;
    public ip?: string;
    public volume?: ClusterVolumeRsp;
    public resourceId?: string;
    public constructor() { 
    }
    public withStatus(status: string): ClusterListInstances {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ClusterListInstances {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ClusterListInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterListInstances {
        this['name'] = name;
        return this;
    }
    public withSpecCode(specCode: string): ClusterListInstances {
        this['specCode'] = specCode;
        return this;
    }
    public withAzCode(azCode: string): ClusterListInstances {
        this['azCode'] = azCode;
        return this;
    }
    public withIp(ip: string): ClusterListInstances {
        this['ip'] = ip;
        return this;
    }
    public withVolume(volume: ClusterVolumeRsp): ClusterListInstances {
        this['volume'] = volume;
        return this;
    }
    public withResourceId(resourceId: string): ClusterListInstances {
        this['resourceId'] = resourceId;
        return this;
    }
}