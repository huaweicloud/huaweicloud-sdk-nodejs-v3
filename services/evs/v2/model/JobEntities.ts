import { SubJob } from './SubJob';


export class JobEntities {
    private 'volume_type'?: string;
    public size?: number;
    private 'volume_id'?: string;
    public name?: string;
    private 'sub_jobs'?: Array<SubJob>;
    public constructor() { 
    }
    public withVolumeType(volumeType: string): JobEntities {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withSize(size: number): JobEntities {
        this['size'] = size;
        return this;
    }
    public withVolumeId(volumeId: string): JobEntities {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withName(name: string): JobEntities {
        this['name'] = name;
        return this;
    }
    public withSubJobs(subJobs: Array<SubJob>): JobEntities {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJob>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<SubJob> | undefined {
        return this['sub_jobs'];
    }
}