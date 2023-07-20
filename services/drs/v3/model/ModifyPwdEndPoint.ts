import { KerberosVO } from './KerberosVO';


export class ModifyPwdEndPoint {
    private 'db_password'?: string;
    private 'end_point_type'?: ModifyPwdEndPointEndPointTypeEnum | string;
    private 'job_id'?: string;
    public kerberos?: KerberosVO;
    public constructor(dbPassword?: string, endPointType?: string, jobId?: string) { 
        this['db_password'] = dbPassword;
        this['end_point_type'] = endPointType;
        this['job_id'] = jobId;
    }
    public withDbPassword(dbPassword: string): ModifyPwdEndPoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withEndPointType(endPointType: ModifyPwdEndPointEndPointTypeEnum | string): ModifyPwdEndPoint {
        this['end_point_type'] = endPointType;
        return this;
    }
    public set endPointType(endPointType: ModifyPwdEndPointEndPointTypeEnum | string  | undefined) {
        this['end_point_type'] = endPointType;
    }
    public get endPointType(): ModifyPwdEndPointEndPointTypeEnum | string | undefined {
        return this['end_point_type'];
    }
    public withJobId(jobId: string): ModifyPwdEndPoint {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withKerberos(kerberos: KerberosVO): ModifyPwdEndPoint {
        this['kerberos'] = kerberos;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyPwdEndPointEndPointTypeEnum {
    SO = 'so',
    TA = 'ta'
}
