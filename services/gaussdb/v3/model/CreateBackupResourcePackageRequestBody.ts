import { TaurusDbChargeInfo } from './TaurusDbChargeInfo';


export class CreateBackupResourcePackageRequestBody {
    private 'spec_code'?: string;
    public num?: number;
    private 'charge_info'?: TaurusDbChargeInfo;
    public constructor(specCode?: string, num?: number, chargeInfo?: TaurusDbChargeInfo) { 
        this['spec_code'] = specCode;
        this['num'] = num;
        this['charge_info'] = chargeInfo;
    }
    public withSpecCode(specCode: string): CreateBackupResourcePackageRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNum(num: number): CreateBackupResourcePackageRequestBody {
        this['num'] = num;
        return this;
    }
    public withChargeInfo(chargeInfo: TaurusDbChargeInfo): CreateBackupResourcePackageRequestBody {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: TaurusDbChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): TaurusDbChargeInfo | undefined {
        return this['charge_info'];
    }
}