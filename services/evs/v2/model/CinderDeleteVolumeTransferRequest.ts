

export class CinderDeleteVolumeTransferRequest {
    private 'transfer_id': string | undefined;
    public constructor(transferId?: any) { 
        this['transfer_id'] = transferId;
    }
    public withTransferId(transferId: string): CinderDeleteVolumeTransferRequest {
        this['transfer_id'] = transferId;
        return this;
    }
    public set transferId(transferId: string | undefined) {
        this['transfer_id'] = transferId;
    }
    public get transferId() {
        return this['transfer_id'];
    }
}