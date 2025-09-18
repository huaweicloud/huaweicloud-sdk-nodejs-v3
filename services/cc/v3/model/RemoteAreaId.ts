import { RemoteAreaIdDef } from './RemoteAreaIdDef';


export class RemoteAreaId {
    private 'remote_area_id'?: RemoteAreaIdDef;
    public constructor(remoteAreaId?: RemoteAreaIdDef) { 
        this['remote_area_id'] = remoteAreaId;
    }
    public withRemoteAreaId(remoteAreaId: RemoteAreaIdDef): RemoteAreaId {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: RemoteAreaIdDef  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): RemoteAreaIdDef | undefined {
        return this['remote_area_id'];
    }
}