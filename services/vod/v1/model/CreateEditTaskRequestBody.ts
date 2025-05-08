import { AdditionalObjectProcessReq } from './AdditionalObjectProcessReq';
import { EditMediaTaskInput } from './EditMediaTaskInput';
import { EditingSetting } from './EditingSetting';
import { ObsInfo } from './ObsInfo';


export class CreateEditTaskRequestBody {
    public inputs?: Array<EditMediaTaskInput>;
    private 'file_name'?: string;
    private 'editing_settings'?: EditingSetting;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public output?: ObsInfo;
    private 'media_process_task'?: AdditionalObjectProcessReq;
    public constructor(inputs?: Array<EditMediaTaskInput>, output?: ObsInfo) { 
        this['inputs'] = inputs;
        this['output'] = output;
    }
    public withInputs(inputs: Array<EditMediaTaskInput>): CreateEditTaskRequestBody {
        this['inputs'] = inputs;
        return this;
    }
    public withFileName(fileName: string): CreateEditTaskRequestBody {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withEditingSettings(editingSettings: EditingSetting): CreateEditTaskRequestBody {
        this['editing_settings'] = editingSettings;
        return this;
    }
    public set editingSettings(editingSettings: EditingSetting  | undefined) {
        this['editing_settings'] = editingSettings;
    }
    public get editingSettings(): EditingSetting | undefined {
        return this['editing_settings'];
    }
    public withCallbackUrl(callbackUrl: string): CreateEditTaskRequestBody {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): CreateEditTaskRequestBody {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: string  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): string | undefined {
        return this['session_context'];
    }
    public withOutput(output: ObsInfo): CreateEditTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withMediaProcessTask(mediaProcessTask: AdditionalObjectProcessReq): CreateEditTaskRequestBody {
        this['media_process_task'] = mediaProcessTask;
        return this;
    }
    public set mediaProcessTask(mediaProcessTask: AdditionalObjectProcessReq  | undefined) {
        this['media_process_task'] = mediaProcessTask;
    }
    public get mediaProcessTask(): AdditionalObjectProcessReq | undefined {
        return this['media_process_task'];
    }
}