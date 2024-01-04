

export class SnapshotSpecItems {
    public id?: string;
    public type?: string;
    public status?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): SnapshotSpecItems {
        this['id'] = id;
        return this;
    }
    public withType(type: string): SnapshotSpecItems {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): SnapshotSpecItems {
        this['status'] = status;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): SnapshotSpecItems {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): SnapshotSpecItems {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withMessage(message: string): SnapshotSpecItems {
        this['message'] = message;
        return this;
    }
}