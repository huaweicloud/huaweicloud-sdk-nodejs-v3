

export class CreateTrafficMirrorConfig {
    private 'target_ids'?: Array<string>;
    private 'mirror_request_body_enable'?: boolean;
    public constructor() { 
    }
    public withTargetIds(targetIds: Array<string>): CreateTrafficMirrorConfig {
        this['target_ids'] = targetIds;
        return this;
    }
    public set targetIds(targetIds: Array<string>  | undefined) {
        this['target_ids'] = targetIds;
    }
    public get targetIds(): Array<string> | undefined {
        return this['target_ids'];
    }
    public withMirrorRequestBodyEnable(mirrorRequestBodyEnable: boolean): CreateTrafficMirrorConfig {
        this['mirror_request_body_enable'] = mirrorRequestBodyEnable;
        return this;
    }
    public set mirrorRequestBodyEnable(mirrorRequestBodyEnable: boolean  | undefined) {
        this['mirror_request_body_enable'] = mirrorRequestBodyEnable;
    }
    public get mirrorRequestBodyEnable(): boolean | undefined {
        return this['mirror_request_body_enable'];
    }
}