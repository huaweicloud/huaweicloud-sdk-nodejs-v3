

export class ExecuteActionRequestBodyMetadata {
    public annotations?: { [key: string]: string; };
    public name?: ExecuteActionRequestBodyMetadataNameEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withAnnotations(annotations: { [key: string]: string; }): ExecuteActionRequestBodyMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withName(name: ExecuteActionRequestBodyMetadataNameEnum | string): ExecuteActionRequestBodyMetadata {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteActionRequestBodyMetadataNameEnum {
    DEPLOY = 'deploy',
    UPGRADE = 'upgrade',
    CONFIGURE = 'configure',
    SCALE = 'scale',
    RESTART = 'restart',
    START = 'start',
    STOP = 'stop',
    ROLLBACK = 'rollback'
}
