

export class QuerySnapshotsRespItems {
    public id?: number;
    public status?: number;
    private 'create_at'?: number;
    private 'find_lock'?: number;
    private 'happen_at'?: number;
    public constructor() { 
    }
    public withId(id: number): QuerySnapshotsRespItems {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): QuerySnapshotsRespItems {
        this['status'] = status;
        return this;
    }
    public withCreateAt(createAt: number): QuerySnapshotsRespItems {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withFindLock(findLock: number): QuerySnapshotsRespItems {
        this['find_lock'] = findLock;
        return this;
    }
    public set findLock(findLock: number  | undefined) {
        this['find_lock'] = findLock;
    }
    public get findLock(): number | undefined {
        return this['find_lock'];
    }
    public withHappenAt(happenAt: number): QuerySnapshotsRespItems {
        this['happen_at'] = happenAt;
        return this;
    }
    public set happenAt(happenAt: number  | undefined) {
        this['happen_at'] = happenAt;
    }
    public get happenAt(): number | undefined {
        return this['happen_at'];
    }
}