import { ParaGroupDatastore } from './ParaGroupDatastore';


export class OffsiteBackupInstance {
    public id?: string;
    public name?: string;
    private 'source_region'?: string;
    private 'source_project_id'?: string;
    public datastore?: ParaGroupDatastore;
    private 'destination_region'?: string;
    private 'destination_project_id'?: string;
    private 'keep_days'?: number;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): OffsiteBackupInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OffsiteBackupInstance {
        this['name'] = name;
        return this;
    }
    public withSourceRegion(sourceRegion: string): OffsiteBackupInstance {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
    public withSourceProjectId(sourceProjectId: string): OffsiteBackupInstance {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
    public withDatastore(datastore: ParaGroupDatastore): OffsiteBackupInstance {
        this['datastore'] = datastore;
        return this;
    }
    public withDestinationRegion(destinationRegion: string): OffsiteBackupInstance {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationProjectId(destinationProjectId: string): OffsiteBackupInstance {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withKeepDays(keepDays: number): OffsiteBackupInstance {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
}