import { DisassociaterouterRequestBody } from './DisassociaterouterRequestBody';


export class DisassociateRouterRequest {
    private 'zone_id': string | undefined;
    public body?: DisassociaterouterRequestBody;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): DisassociateRouterRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: DisassociaterouterRequestBody): DisassociateRouterRequest {
        this['body'] = body;
        return this;
    }
}