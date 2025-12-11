import { VirsubnetCidrReservation } from './VirsubnetCidrReservation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVirsubnetCidrReservationResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'virsubnet_cidr_reservation'?: VirsubnetCidrReservation;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateVirsubnetCidrReservationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVirsubnetCidrReservation(virsubnetCidrReservation: VirsubnetCidrReservation): CreateVirsubnetCidrReservationResponse {
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
        return this;
    }
    public set virsubnetCidrReservation(virsubnetCidrReservation: VirsubnetCidrReservation  | undefined) {
        this['virsubnet_cidr_reservation'] = virsubnetCidrReservation;
    }
    public get virsubnetCidrReservation(): VirsubnetCidrReservation | undefined {
        return this['virsubnet_cidr_reservation'];
    }
}