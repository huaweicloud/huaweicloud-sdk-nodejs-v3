import { Volume } from './Volume';


export class AddVolumes {
    private 'service_id'?: string;
    public volumes?: Array<Volume>;
    public constructor() { 
    }
    public withServiceId(serviceId: string): AddVolumes {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withVolumes(volumes: Array<Volume>): AddVolumes {
        this['volumes'] = volumes;
        return this;
    }
}