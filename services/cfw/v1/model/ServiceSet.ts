

export class ServiceSet {
    private 'set_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'ref_count'?: number | undefined;
    public status?: string;
    public constructor() { 
    }
    public withSetId(setId: string): ServiceSet {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withName(name: string): ServiceSet {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ServiceSet {
        this['description'] = description;
        return this;
    }
    public withRefCount(refCount: number): ServiceSet {
        this['ref_count'] = refCount;
        return this;
    }
    public set refCount(refCount: number | undefined) {
        this['ref_count'] = refCount;
    }
    public get refCount() {
        return this['ref_count'];
    }
    public withStatus(status: string): ServiceSet {
        this['status'] = status;
        return this;
    }
}