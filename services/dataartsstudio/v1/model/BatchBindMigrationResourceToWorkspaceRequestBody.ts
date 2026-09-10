import { MigrationBindResource } from './MigrationBindResource';


export class BatchBindMigrationResourceToWorkspaceRequestBody {
    private 'banding_resource_list'?: Array<MigrationBindResource>;
    public constructor(bandingResourceList?: Array<MigrationBindResource>) { 
        this['banding_resource_list'] = bandingResourceList;
    }
    public withBandingResourceList(bandingResourceList: Array<MigrationBindResource>): BatchBindMigrationResourceToWorkspaceRequestBody {
        this['banding_resource_list'] = bandingResourceList;
        return this;
    }
    public set bandingResourceList(bandingResourceList: Array<MigrationBindResource>  | undefined) {
        this['banding_resource_list'] = bandingResourceList;
    }
    public get bandingResourceList(): Array<MigrationBindResource> | undefined {
        return this['banding_resource_list'];
    }
}