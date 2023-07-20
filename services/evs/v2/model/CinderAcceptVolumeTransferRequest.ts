import { CinderAcceptVolumeTransferRequestBody } from './CinderAcceptVolumeTransferRequestBody';


export class CinderAcceptVolumeTransferRequest {
    private 'transfer_id'?: string;
    public body?: CinderAcceptVolumeTransferRequestBody;
    public constructor(transferId?: string) { 
        this['transfer_id'] = transferId;
    }
    public withTransferId(transferId: string): CinderAcceptVolumeTransferRequest {
        this['transfer_id'] = transferId;
        return this;
    }
    public set transferId(transferId: string  | undefined) {
        this['transfer_id'] = transferId;
    }
    public get transferId(): string | undefined {
        return this['transfer_id'];
    }
    public withBody(body: CinderAcceptVolumeTransferRequestBody): CinderAcceptVolumeTransferRequest {
        this['body'] = body;
        return this;
    }
}