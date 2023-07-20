import { UpdateHealthmonitorRequestBody } from './UpdateHealthmonitorRequestBody';


export class UpdateHealthmonitorRequest {
    private 'healthmonitor_id'?: string;
    public body?: UpdateHealthmonitorRequestBody;
    public constructor(healthmonitorId?: string) { 
        this['healthmonitor_id'] = healthmonitorId;
    }
    public withHealthmonitorId(healthmonitorId: string): UpdateHealthmonitorRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string  | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId(): string | undefined {
        return this['healthmonitor_id'];
    }
    public withBody(body: UpdateHealthmonitorRequestBody): UpdateHealthmonitorRequest {
        this['body'] = body;
        return this;
    }
}