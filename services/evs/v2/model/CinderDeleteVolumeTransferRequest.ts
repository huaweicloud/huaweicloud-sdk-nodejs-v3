

export class CinderDeleteVolumeTransferRequest {
    private 'transfer_id'?: string;
    public constructor(transferId?: string) { 
        this['transfer_id'] = transferId;
    }
    public withTransferId(transferId: string): CinderDeleteVolumeTransferRequest {
        this['transfer_id'] = transferId;
        return this;
    }
    public set transferId(transferId: string  | undefined) {
        this['transfer_id'] = transferId;
    }
    public get transferId(): string | undefined {
        return this['transfer_id'];
    }
}