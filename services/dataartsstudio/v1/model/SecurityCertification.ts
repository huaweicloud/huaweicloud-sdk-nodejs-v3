import { DiagnoseResult } from './DiagnoseResult';
import { KerberosStatus } from './KerberosStatus';


export class SecurityCertification {
    public result?: DiagnoseResult;
    private 'kerberos_info'?: Array<KerberosStatus>;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): SecurityCertification {
        this['result'] = result;
        return this;
    }
    public withKerberosInfo(kerberosInfo: Array<KerberosStatus>): SecurityCertification {
        this['kerberos_info'] = kerberosInfo;
        return this;
    }
    public set kerberosInfo(kerberosInfo: Array<KerberosStatus>  | undefined) {
        this['kerberos_info'] = kerberosInfo;
    }
    public get kerberosInfo(): Array<KerberosStatus> | undefined {
        return this['kerberos_info'];
    }
}