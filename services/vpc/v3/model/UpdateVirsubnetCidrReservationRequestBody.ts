import { UpdateVirsubnetCidrReservationOption } from './UpdateVirsubnetCidrReservationOption';


export class UpdateVirsubnetCidrReservationRequestBody {
    private 'dry_run'?: boolean;
    private 'virsubnet_cidr_reservation'?: UpdateVirsubnetCidrReservationOption;
    public constructor(virsubnetCidrReservation?: UpdateVirsubnetCidrReservationOption) { 
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
    }
    public withDryRun(dryRun: boolean): UpdateVirsubnetCidrReservationRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withVirsubnetCidrReservation(virsubnetCidrReservation: UpdateVirsubnetCidrReservationOption): UpdateVirsubnetCidrReservationRequestBody {
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
        return this;
    }
    public set virsubnetCidrReservation(virsubnetCidrReservation: UpdateVirsubnetCidrReservationOption  | undefined) {
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
    }
    public get virsubnetCidrReservation(): UpdateVirsubnetCidrReservationOption | undefined {
        return this['virsubnet_cidr_reservation'];
    }
}