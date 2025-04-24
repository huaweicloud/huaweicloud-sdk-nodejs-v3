

export class SinkObsParameters {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'obs_bucket'?: string;
    private 'obs_path'?: string;
    private 'time_format'?: SinkObsParametersTimeFormatEnum | string;
    public constructor(accessKey?: string, secretKey?: string, obsBucket?: string, timeFormat?: string) { 
        this['access_key'] = accessKey;
        this['secret_key'] = secretKey;
        this['obs_bucket'] = obsBucket;
        this['time_format'] = timeFormat;
    }
    public withAccessKey(accessKey: string): SinkObsParameters {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): SinkObsParameters {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withObsBucket(obsBucket: string): SinkObsParameters {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withObsPath(obsPath: string): SinkObsParameters {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withTimeFormat(timeFormat: SinkObsParametersTimeFormatEnum | string): SinkObsParameters {
        this['time_format'] = timeFormat;
        return this;
    }
    public set timeFormat(timeFormat: SinkObsParametersTimeFormatEnum | string  | undefined) {
        this['time_format'] = timeFormat;
    }
    public get timeFormat(): SinkObsParametersTimeFormatEnum | string | undefined {
        return this['time_format'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SinkObsParametersTimeFormatEnum {
    YYYY = 'yyyy',
    YYYY_MM = 'yyyy/MM',
    YYYY_MM_DD = 'yyyy/MM/dd',
    YYYY_MM_DD_HH = 'yyyy/MM/dd/HH',
    YYYY_MM_DD_HH_MM = 'yyyy/MM/dd/HH/mm'
}
