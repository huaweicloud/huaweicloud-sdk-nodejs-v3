import { ProjectId } from './ProjectId';
import { UUID32Identifier } from './UUID32Identifier';


export class InterRegion {
    public id?: string;
    private 'project_id'?: string;
    private 'local_region_id'?: string;
    private 'remote_region_id'?: string;
    public constructor(id?: string, projectId?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
    }
    public withId(id: string): InterRegion {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): InterRegion {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLocalRegionId(localRegionId: string): InterRegion {
        this['local_region_id'] = localRegionId;
        return this;
    }
    public set localRegionId(localRegionId: string  | undefined) {
        this['local_region_id'] = localRegionId;
    }
    public get localRegionId(): string | undefined {
        return this['local_region_id'];
    }
    public withRemoteRegionId(remoteRegionId: string): InterRegion {
        this['remote_region_id'] = remoteRegionId;
        return this;
    }
    public set remoteRegionId(remoteRegionId: string  | undefined) {
        this['remote_region_id'] = remoteRegionId;
    }
    public get remoteRegionId(): string | undefined {
        return this['remote_region_id'];
    }
}