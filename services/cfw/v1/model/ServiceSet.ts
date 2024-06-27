

export class ServiceSet {
    private 'set_id'?: string;
    public name?: string;
    public description?: string;
    private 'service_set_type'?: number;
    private 'ref_count'?: number;
    private 'project_id'?: string;
    public protocols?: Array<number>;
    public constructor() { 
    }
    public withSetId(setId: string): ServiceSet {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
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
    public withServiceSetType(serviceSetType: number): ServiceSet {
        this['service_set_type'] = serviceSetType;
        return this;
    }
    public set serviceSetType(serviceSetType: number  | undefined) {
        this['service_set_type'] = serviceSetType;
    }
    public get serviceSetType(): number | undefined {
        return this['service_set_type'];
    }
    public withRefCount(refCount: number): ServiceSet {
        this['ref_count'] = refCount;
        return this;
    }
    public set refCount(refCount: number  | undefined) {
        this['ref_count'] = refCount;
    }
    public get refCount(): number | undefined {
        return this['ref_count'];
    }
    public withProjectId(projectId: string): ServiceSet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocols(protocols: Array<number>): ServiceSet {
        this['protocols'] = protocols;
        return this;
    }
}