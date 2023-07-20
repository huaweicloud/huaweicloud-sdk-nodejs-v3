

export class Snapshots {
    public id?: string;
    public name?: string;
    public description?: string;
    public started?: string;
    public finished?: string;
    public size?: number;
    public status?: string;
    public type?: string;
    private 'cluster_id'?: string;
    public constructor(id?: string, name?: string, description?: string, started?: string, finished?: string, size?: number, status?: string, type?: string, clusterId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['started'] = started;
        this['finished'] = finished;
        this['size'] = size;
        this['status'] = status;
        this['type'] = type;
        this['cluster_id'] = clusterId;
    }
    public withId(id: string): Snapshots {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Snapshots {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Snapshots {
        this['description'] = description;
        return this;
    }
    public withStarted(started: string): Snapshots {
        this['started'] = started;
        return this;
    }
    public withFinished(finished: string): Snapshots {
        this['finished'] = finished;
        return this;
    }
    public withSize(size: number): Snapshots {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): Snapshots {
        this['status'] = status;
        return this;
    }
    public withType(type: string): Snapshots {
        this['type'] = type;
        return this;
    }
    public withClusterId(clusterId: string): Snapshots {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}