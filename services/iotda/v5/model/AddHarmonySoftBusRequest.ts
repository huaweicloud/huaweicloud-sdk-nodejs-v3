import { AddHarmonySoftBusDTO } from './AddHarmonySoftBusDTO';


export class AddHarmonySoftBusRequest {
    private 'Instance-Id'?: string;
    public body?: AddHarmonySoftBusDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddHarmonySoftBusRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddHarmonySoftBusDTO): AddHarmonySoftBusRequest {
        this['body'] = body;
        return this;
    }
}