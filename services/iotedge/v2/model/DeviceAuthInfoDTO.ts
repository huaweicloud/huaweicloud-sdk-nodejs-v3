import { CertificateLocalPathDTO } from './CertificateLocalPathDTO';


export class DeviceAuthInfoDTO {
    private 'auth_type'?: string;
    public fingerprint?: string;
    private 'local_path'?: CertificateLocalPathDTO;
    public constructor(authType?: string) { 
        this['auth_type'] = authType;
    }
    public withAuthType(authType: string): DeviceAuthInfoDTO {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withFingerprint(fingerprint: string): DeviceAuthInfoDTO {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withLocalPath(localPath: CertificateLocalPathDTO): DeviceAuthInfoDTO {
        this['local_path'] = localPath;
        return this;
    }
    public set localPath(localPath: CertificateLocalPathDTO  | undefined) {
        this['local_path'] = localPath;
    }
    public get localPath(): CertificateLocalPathDTO | undefined {
        return this['local_path'];
    }
}