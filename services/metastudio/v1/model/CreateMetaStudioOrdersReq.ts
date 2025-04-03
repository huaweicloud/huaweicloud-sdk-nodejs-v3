import { PublicCloudServiceOrder } from './PublicCloudServiceOrder';


export class CreateMetaStudioOrdersReq {
    private 'cloud_services'?: Array<PublicCloudServiceOrder>;
    public constructor() { 
    }
    public withCloudServices(cloudServices: Array<PublicCloudServiceOrder>): CreateMetaStudioOrdersReq {
        this['cloud_services'] = cloudServices;
        return this;
    }
    public set cloudServices(cloudServices: Array<PublicCloudServiceOrder>  | undefined) {
        this['cloud_services'] = cloudServices;
    }
    public get cloudServices(): Array<PublicCloudServiceOrder> | undefined {
        return this['cloud_services'];
    }
}