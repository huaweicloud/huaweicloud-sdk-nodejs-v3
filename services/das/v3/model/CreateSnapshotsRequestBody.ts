

export class CreateSnapshotsRequestBody {
    public modules?: Array<number>;
    public constructor(modules?: Array<number>) { 
        this['modules'] = modules;
    }
    public withModules(modules: Array<number>): CreateSnapshotsRequestBody {
        this['modules'] = modules;
        return this;
    }
}