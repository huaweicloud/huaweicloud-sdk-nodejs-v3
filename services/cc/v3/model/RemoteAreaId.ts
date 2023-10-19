import { AreaIdDef } from './AreaIdDef';


export class RemoteAreaId {
    private 'remote_area_id'?: AreaIdDef;
    public constructor(remoteAreaId?: AreaIdDef) { 
        this['remote_area_id'] = remoteAreaId;
    }
    public withRemoteAreaId(remoteAreaId: AreaIdDef): RemoteAreaId {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: AreaIdDef  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): AreaIdDef | undefined {
        return this['remote_area_id'];
    }
}