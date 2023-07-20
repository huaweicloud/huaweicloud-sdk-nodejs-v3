

export class DomainMigrate {
    private 'all_regions'?: boolean;
    public reservation?: number;
    public constructor(allRegions?: boolean, reservation?: number) { 
        this['all_regions'] = allRegions;
        this['reservation'] = reservation;
    }
    public withAllRegions(allRegions: boolean): DomainMigrate {
        this['all_regions'] = allRegions;
        return this;
    }
    public set allRegions(allRegions: boolean  | undefined) {
        this['all_regions'] = allRegions;
    }
    public get allRegions(): boolean | undefined {
        return this['all_regions'];
    }
    public withReservation(reservation: number): DomainMigrate {
        this['reservation'] = reservation;
        return this;
    }
}