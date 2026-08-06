
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLongHistoryTransactionSwitchNewResponse extends SdkResponse {
    private 'switch_on'?: boolean;
    public threshold?: number;
    private 'can_open'?: boolean;
    private 'cant_open_msg'?: string;
    public constructor() { 
        super();
    }
    public withSwitchOn(switchOn: boolean): ShowLongHistoryTransactionSwitchNewResponse {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withThreshold(threshold: number): ShowLongHistoryTransactionSwitchNewResponse {
        this['threshold'] = threshold;
        return this;
    }
    public withCanOpen(canOpen: boolean): ShowLongHistoryTransactionSwitchNewResponse {
        this['can_open'] = canOpen;
        return this;
    }
    public set canOpen(canOpen: boolean  | undefined) {
        this['can_open'] = canOpen;
    }
    public get canOpen(): boolean | undefined {
        return this['can_open'];
    }
    public withCantOpenMsg(cantOpenMsg: string): ShowLongHistoryTransactionSwitchNewResponse {
        this['cant_open_msg'] = cantOpenMsg;
        return this;
    }
    public set cantOpenMsg(cantOpenMsg: string  | undefined) {
        this['cant_open_msg'] = cantOpenMsg;
    }
    public get cantOpenMsg(): string | undefined {
        return this['cant_open_msg'];
    }
}