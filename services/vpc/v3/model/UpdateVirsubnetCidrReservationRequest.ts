import { UpdateVirsubnetCidrReservationRequestBody } from './UpdateVirsubnetCidrReservationRequestBody';


export class UpdateVirsubnetCidrReservationRequest {
    private 'virsubnet_cidr_reservation_id'?: string;
    public body?: UpdateVirsubnetCidrReservationRequestBody;
    public constructor(virsubnetCidrReservationId?: string) { 
        this['virsubnet_cidr_reservation_id'] = virsubnetCidrReservationId;
    }
    public withVirsubnetCidrReservationId(virsubnetCidrReservationId: string): UpdateVirsubnetCidrReservationRequest {
        this['virsubnet_cidr_reservation_id'] = virsubnetCidrReservationId;
        return this;
    }
    public set virsubnetCidrReservationId(virsubnetCidrReservationId: string  | undefined) {
        this['virsubnet_cidr_reservation_id'] = virsubnetCidrReservationId;
    }
    public get virsubnetCidrReservationId(): string | undefined {
        return this['virsubnet_cidr_reservation_id'];
    }
    public withBody(body: UpdateVirsubnetCidrReservationRequestBody): UpdateVirsubnetCidrReservationRequest {
        this['body'] = body;
        return this;
    }
}