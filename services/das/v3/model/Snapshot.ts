

export class Snapshot {
    public id?: number;
    public status?: number;
    private 'create_at'?: number;
    private 'find_lock'?: number;
    public constructor() { 
    }
    public withId(id: number): Snapshot {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): Snapshot {
        this['status'] = status;
        return this;
    }
    public withCreateAt(createAt: number): Snapshot {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withFindLock(findLock: number): Snapshot {
        this['find_lock'] = findLock;
        return this;
    }
    public set findLock(findLock: number  | undefined) {
        this['find_lock'] = findLock;
    }
    public get findLock(): number | undefined {
        return this['find_lock'];
    }
}