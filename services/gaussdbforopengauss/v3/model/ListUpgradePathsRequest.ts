

export class ListUpgradePathsRequest {
    private 'X-Language'?: ListUpgradePathsRequestXLanguageEnum | string;
    private 'source_version'?: string;
    private 'target_version'?: string;
    public constructor(sourceVersion?: string) { 
        this['source_version'] = sourceVersion;
    }
    public withXLanguage(xLanguage: ListUpgradePathsRequestXLanguageEnum | string): ListUpgradePathsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListUpgradePathsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListUpgradePathsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSourceVersion(sourceVersion: string): ListUpgradePathsRequest {
        this['source_version'] = sourceVersion;
        return this;
    }
    public set sourceVersion(sourceVersion: string  | undefined) {
        this['source_version'] = sourceVersion;
    }
    public get sourceVersion(): string | undefined {
        return this['source_version'];
    }
    public withTargetVersion(targetVersion: string): ListUpgradePathsRequest {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUpgradePathsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
