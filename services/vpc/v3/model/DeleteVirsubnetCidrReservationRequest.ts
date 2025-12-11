

export class DeleteVirsubnetCidrReservationRequest {
    private 'virsubnet_cidr_reservation_id'?: string;
    public constructor(virsubnetCidrReservationId?: string) { 
        this['virsubnet_cidr_reservation_id'] = virsubnetCidrReservationId;
    }
    public withVirsubnetCidrReservationId(virsubnetCidrReservationId: string): DeleteVirsubnetCidrReservationRequest {
        this['virsubnet_cidr_reservation_id'] = virsubnetCidrReservationId;
        return this;
    }
    public set virsubnetCidrReservationId(virsubnetCidrReservationId: string  | undefined) {
        this['virsubnet_cidr_reservation_id'] = virsubnetCidrReservationId;
    }
    public get virsubnetCidrReservationId(): string | undefined {
        return this['virsubnet_cidr_reservation_id'];
    }
}