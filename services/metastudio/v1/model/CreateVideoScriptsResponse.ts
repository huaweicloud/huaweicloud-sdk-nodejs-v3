import { ShootScriptAudioFiles } from './ShootScriptAudioFiles';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVideoScriptsResponse extends SdkResponse {
    private 'script_id'?: string;
    private 'audio_files'?: ShootScriptAudioFiles;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withScriptId(scriptId: string): CreateVideoScriptsResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withAudioFiles(audioFiles: ShootScriptAudioFiles): CreateVideoScriptsResponse {
        this['audio_files'] = audioFiles;
        return this;
    }
    public set audioFiles(audioFiles: ShootScriptAudioFiles  | undefined) {
        this['audio_files'] = audioFiles;
    }
    public get audioFiles(): ShootScriptAudioFiles | undefined {
        return this['audio_files'];
    }
    public withXRequestId(xRequestId: string): CreateVideoScriptsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}