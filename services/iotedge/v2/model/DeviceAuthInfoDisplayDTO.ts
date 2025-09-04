import { CertificateLocalPathDTO } from './CertificateLocalPathDTO';


export class DeviceAuthInfoDisplayDTO {
    private 'auth_type'?: string;
    private 'local_path'?: CertificateLocalPathDTO;
    public constructor(authType?: string) { 
        this['auth_type'] = authType;
    }
    public withAuthType(authType: string): DeviceAuthInfoDisplayDTO {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withLocalPath(localPath: CertificateLocalPathDTO): DeviceAuthInfoDisplayDTO {
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