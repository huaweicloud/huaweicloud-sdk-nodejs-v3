import { IAMAgency } from './IAMAgency';
import { KMSCmk } from './KMSCmk';
import { OBSBucket } from './OBSBucket';


export class Configuration {
    private 'iam_agency'?: IAMAgency;
    private 'obs_bucket'?: OBSBucket;
    private 'kms_cmk'?: KMSCmk;
    public constructor() { 
    }
    public withIamAgency(iamAgency: IAMAgency): Configuration {
        this['iam_agency'] = iamAgency;
        return this;
    }
    public set iamAgency(iamAgency: IAMAgency  | undefined) {
        this['iam_agency'] = iamAgency;
    }
    public get iamAgency(): IAMAgency | undefined {
        return this['iam_agency'];
    }
    public withObsBucket(obsBucket: OBSBucket): Configuration {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: OBSBucket  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): OBSBucket | undefined {
        return this['obs_bucket'];
    }
    public withKmsCmk(kmsCmk: KMSCmk): Configuration {
        this['kms_cmk'] = kmsCmk;
        return this;
    }
    public set kmsCmk(kmsCmk: KMSCmk  | undefined) {
        this['kms_cmk'] = kmsCmk;
    }
    public get kmsCmk(): KMSCmk | undefined {
        return this['kms_cmk'];
    }
}