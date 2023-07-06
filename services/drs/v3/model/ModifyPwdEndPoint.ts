import { KerberosVO } from './KerberosVO';


export class ModifyPwdEndPoint {
    private 'db_password': string | undefined;
    private 'end_point_type': ModifyPwdEndPointEndPointTypeEnum | undefined;
    private 'job_id': string | undefined;
    public kerberos?: KerberosVO;
    public constructor(dbPassword?: any, endPointType?: any, jobId?: any) { 
        this['db_password'] = dbPassword;
        this['end_point_type'] = endPointType;
        this['job_id'] = jobId;
    }
    public withDbPassword(dbPassword: string): ModifyPwdEndPoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword() {
        return this['db_password'];
    }
    public withEndPointType(endPointType: ModifyPwdEndPointEndPointTypeEnum): ModifyPwdEndPoint {
        this['end_point_type'] = endPointType;
        return this;
    }
    public set endPointType(endPointType: ModifyPwdEndPointEndPointTypeEnum | undefined) {
        this['end_point_type'] = endPointType;
    }
    public get endPointType() {
        return this['end_point_type'];
    }
    public withJobId(jobId: string): ModifyPwdEndPoint {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
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
