

export class DeleteServicesRequest {
    private 'service_ids'?: Array<string>;
    public constructor(serviceIds?: Array<string>) { 
        this['service_ids'] = serviceIds;
    }
    public withServiceIds(serviceIds: Array<string>): DeleteServicesRequest {
        this['service_ids'] = serviceIds;
        return this;
    }
    public set serviceIds(serviceIds: Array<string>  | undefined) {
        this['service_ids'] = serviceIds;
    }
    public get serviceIds(): Array<string> | undefined {
        return this['service_ids'];
    }
}