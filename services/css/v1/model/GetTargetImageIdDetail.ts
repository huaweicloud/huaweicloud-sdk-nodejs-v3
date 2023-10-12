

export class GetTargetImageIdDetail {
    public id?: string;
    public displayName?: string;
    public imageDesc?: string;
    public datastoreType?: string;
    public datastoreVersion?: string;
    public priority?: number;
    public constructor() { 
    }
    public withId(id: string): GetTargetImageIdDetail {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): GetTargetImageIdDetail {
        this['displayName'] = displayName;
        return this;
    }
    public withImageDesc(imageDesc: string): GetTargetImageIdDetail {
        this['imageDesc'] = imageDesc;
        return this;
    }
    public withDatastoreType(datastoreType: string): GetTargetImageIdDetail {
        this['datastoreType'] = datastoreType;
        return this;
    }
    public withDatastoreVersion(datastoreVersion: string): GetTargetImageIdDetail {
        this['datastoreVersion'] = datastoreVersion;
        return this;
    }
    public withPriority(priority: number): GetTargetImageIdDetail {
        this['priority'] = priority;
        return this;
    }
}