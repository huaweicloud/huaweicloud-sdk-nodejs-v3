import { UpdateVgwSpecificationRequestBody } from './UpdateVgwSpecificationRequestBody';


export class UpdatePostpaidVgwSpecificationRequest {
    private 'vgw_id'?: string;
    public body?: UpdateVgwSpecificationRequestBody;
    public constructor(vgwId?: string) { 
        this['vgw_id'] = vgwId;
    }
    public withVgwId(vgwId: string): UpdatePostpaidVgwSpecificationRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withBody(body: UpdateVgwSpecificationRequestBody): UpdatePostpaidVgwSpecificationRequest {
        this['body'] = body;
        return this;
    }
}