import { CreateVirsubnetCidrReservationOption } from './CreateVirsubnetCidrReservationOption';


export class CreateVirsubnetCidrReservationRequestBody {
    private 'dry_run'?: boolean;
    private 'virsubnet_cidr_reservation'?: CreateVirsubnetCidrReservationOption;
    public constructor(virsubnetCidrReservation?: CreateVirsubnetCidrReservationOption) { 
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
    }
    public withDryRun(dryRun: boolean): CreateVirsubnetCidrReservationRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withVirsubnetCidrReservation(virsubnetCidrReservation: CreateVirsubnetCidrReservationOption): CreateVirsubnetCidrReservationRequestBody {
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
        return this;
    }
    public set virsubnetCidrReservation(virsubnetCidrReservation: CreateVirsubnetCidrReservationOption  | undefined) {
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
    }
    public get virsubnetCidrReservation(): CreateVirsubnetCidrReservationOption | undefined {
        return this['virsubnet_cidr_reservation'];
    }
}