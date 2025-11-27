import { UpdateTransitSubnetRequestBody } from './UpdateTransitSubnetRequestBody';


export class UpdateTransitSubnetRequest {
    private 'transit_subnet_id'?: string;
    public body?: UpdateTransitSubnetRequestBody;
    public constructor(transitSubnetId?: string) { 
        this['transit_subnet_id'] = transitSubnetId;
    }
    public withTransitSubnetId(transitSubnetId: string): UpdateTransitSubnetRequest {
        this['transit_subnet_id'] = transitSubnetId;
        return this;
    }
    public set transitSubnetId(transitSubnetId: string  | undefined) {
        this['transit_subnet_id'] = transitSubnetId;
    }
    public get transitSubnetId(): string | undefined {
        return this['transit_subnet_id'];
    }
    public withBody(body: UpdateTransitSubnetRequestBody): UpdateTransitSubnetRequest {
        this['body'] = body;
        return this;
    }
}