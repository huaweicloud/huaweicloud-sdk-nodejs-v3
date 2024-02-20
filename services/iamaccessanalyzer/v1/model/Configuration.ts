import { IAMAgency } from './IAMAgency';
import { OBSBucket } from './OBSBucket';


export class Configuration {
    private 'iam_agency'?: IAMAgency;
    private 'obs_bucket'?: OBSBucket;
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
}