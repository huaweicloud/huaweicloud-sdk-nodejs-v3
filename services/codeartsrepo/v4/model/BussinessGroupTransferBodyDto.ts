

export class BussinessGroupTransferBodyDto {
    private 'owner_id'?: number;
    public constructor() { 
    }
    public withOwnerId(ownerId: number): BussinessGroupTransferBodyDto {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: number  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): number | undefined {
        return this['owner_id'];
    }
}