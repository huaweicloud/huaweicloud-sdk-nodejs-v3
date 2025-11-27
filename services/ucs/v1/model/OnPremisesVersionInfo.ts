

export class OnPremisesVersionInfo {
    public kubernetesVersion?: string;
    public releaseVersion?: string;
    public ucsctlDownloadURL?: string;
    public arch?: string;
    public obsEndpoint?: string;
    public packagePath?: string;
    public imagesPackagePath?: string;
    public targetVersion?: string;
    public constructor() { 
    }
    public withKubernetesVersion(kubernetesVersion: string): OnPremisesVersionInfo {
        this['kubernetesVersion'] = kubernetesVersion;
        return this;
    }
    public withReleaseVersion(releaseVersion: string): OnPremisesVersionInfo {
        this['releaseVersion'] = releaseVersion;
        return this;
    }
    public withUcsctlDownloadURL(ucsctlDownloadURL: string): OnPremisesVersionInfo {
        this['ucsctlDownloadURL'] = ucsctlDownloadURL;
        return this;
    }
    public withArch(arch: string): OnPremisesVersionInfo {
        this['arch'] = arch;
        return this;
    }
    public withObsEndpoint(obsEndpoint: string): OnPremisesVersionInfo {
        this['obsEndpoint'] = obsEndpoint;
        return this;
    }
    public withPackagePath(packagePath: string): OnPremisesVersionInfo {
        this['packagePath'] = packagePath;
        return this;
    }
    public withImagesPackagePath(imagesPackagePath: string): OnPremisesVersionInfo {
        this['imagesPackagePath'] = imagesPackagePath;
        return this;
    }
    public withTargetVersion(targetVersion: string): OnPremisesVersionInfo {
        this['targetVersion'] = targetVersion;
        return this;
    }
}