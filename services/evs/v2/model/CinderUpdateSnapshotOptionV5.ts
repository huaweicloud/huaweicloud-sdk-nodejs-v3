

export class CinderUpdateSnapshotOptionV5 {
    public name?: string;
    public description?: string;
    private 'instant_access'?: boolean;
    public constructor() { 
    }
    public withName(name: string): CinderUpdateSnapshotOptionV5 {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CinderUpdateSnapshotOptionV5 {
        this['description'] = description;
        return this;
    }
    public withInstantAccess(instantAccess: boolean): CinderUpdateSnapshotOptionV5 {
        this['instant_access'] = instantAccess;
        return this;
    }
    public set instantAccess(instantAccess: boolean  | undefined) {
        this['instant_access'] = instantAccess;
    }
    public get instantAccess(): boolean | undefined {
        return this['instant_access'];
    }
}