import { ChangeServerChargeModePrepaidOption } from './ChangeServerChargeModePrepaidOption';


export class ChangeServerChargeModeRequestBody {
    private 'server_ids'?: Array<string>;
    private 'charge_mode'?: string;
    private 'prepaid_options'?: ChangeServerChargeModePrepaidOption;
    private 'dry_run'?: boolean;
    public constructor(serverIds?: Array<string>, chargeMode?: string) { 
        this['server_ids'] = serverIds;
        this['charge_mode'] = chargeMode;
    }
    public withServerIds(serverIds: Array<string>): ChangeServerChargeModeRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withChargeMode(chargeMode: string): ChangeServerChargeModeRequestBody {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withPrepaidOptions(prepaidOptions: ChangeServerChargeModePrepaidOption): ChangeServerChargeModeRequestBody {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: ChangeServerChargeModePrepaidOption  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): ChangeServerChargeModePrepaidOption | undefined {
        return this['prepaid_options'];
    }
    public withDryRun(dryRun: boolean): ChangeServerChargeModeRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}