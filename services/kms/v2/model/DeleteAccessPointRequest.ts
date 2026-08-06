

export class DeleteAccessPointRequest {
    private 'access_point_id'?: string;
    public constructor(accessPointId?: string) { 
        this['access_point_id'] = accessPointId;
    }
    public withAccessPointId(accessPointId: string): DeleteAccessPointRequest {
        this['access_point_id'] = accessPointId;
        return this;
    }
    public set accessPointId(accessPointId: string  | undefined) {
        this['access_point_id'] = accessPointId;
    }
    public get accessPointId(): string | undefined {
        return this['access_point_id'];
    }
}